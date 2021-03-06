package models

import (
	"encoding/base64"
	"fmt"
	"github.com/gogf/gf/encoding/gjson"
	"github.com/gogf/gf/encoding/gurl"
	"github.com/gogf/gf/frame/g"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
	"time"
)

type Policylist struct {
	*Model
	Task        string `json:"task"`
	Platform    string `json:"platform"`
	Rule        string `json:"rule"`
	CreatedTime string `json:"created_time"`
	UpdatedTime string `json:"updated_time"`
	ExcuteTime  string `json:"excute_time"`
}

func GetPolicylist(pageNum int, pageSize int, maps interface{}) (policylist []Policylist) {
	dbTmp := db
	querys := maps.(map[string]interface{})

	if querys["task"] != nil {
		dbTmp = dbTmp.Where("task LIKE ?", "%"+querys["task"].(string)+"%")
	}
	if querys["platform"] != nil {
		dbTmp = dbTmp.Where("platform LIKE ?", "%"+querys["platform"].(string)+"%")
	}

	dbTmp.Offset(pageNum).Limit(pageSize).Order("id  desc").Find(&policylist)
	return
}

func GetPolicylistTotal(maps interface{}) (count int) {
	dbTmp := db
	querys := maps.(map[string]interface{})

	if querys["task"] != nil {
		dbTmp = dbTmp.Where("task LIKE ?", "%"+querys["task"].(string)+"%")
	}
	if querys["platform"] != nil {
		dbTmp = dbTmp.Where("platform LIKE ?", "%"+querys["platform"].(string)+"%")
	}
	dbTmp.Model(&Policylist{}).Count(&count)
	return
}

func AddPolicylist(data map[string]interface{}) {
	policylist := Policylist{
		Task:        data["task"].(string),
		Platform:    data["platform"].(string),
		Rule:        data["rule"].(string),
		CreatedTime: time.Now().Format("2006-01-02 15:04:05"),
		UpdatedTime: time.Now().Format("2006-01-02 15:04:05"),
		ExcuteTime:  "0",
	}
	db.AutoMigrate(&policylist)
	db.Create(&policylist)
}

func EditPolicylist(id int, data interface{}) bool {
	db.Model(&Pocscanlist{}).Where("id = ?", id).Updates(data)
	return true
}

func DelPolicylist(id int) (bool, int) {
	db.Where("id = " + strconv.Itoa(id)).Delete(&Policylist{})
	return true, id
}

//执行策略
func DoPolicylist(id int) (bool, string) {
	var Policylist Policylist
	maps := make(map[string]interface{})
	maps["excute_time"] = "100"
	EditPolicylist(id, maps)
	db.Where("id = " + strconv.Itoa(id)).Find(&Policylist)

	if Policylist.Platform == "fofa" {

		fmt.Println("fofa任务......")

		fofaTotal, errmsg := FofaSearchTotal(Policylist.Rule)
		fmt.Println("total总数为", fofaTotal)
		fmt.Println("errmsg为", errmsg)

		if errmsg == "true" {
			res := (fofaTotal + 100) / 100
			fmt.Println("res为", res)
			for i := 1; i <= res; i++ {
				FofaSearch(Policylist.Task, Policylist.Rule, 100, i)
			}
			return true, errmsg
		} else {
			return false, errmsg
		}

	} else if Policylist.Platform == "zoomeye" {

		fmt.Println("zoomeye任务......")
		//ZoomeyeSearch(Policylist.Task, Policylist.Rule)

	} else if Policylist.Platform == "hunter" {

		fmt.Println("hunter任务......")
		hunterTotal, hunterTotalSuccess := HunterSearchTotal(Policylist.Rule)
		fmt.Println("total总数为", hunterTotal)
		if hunterTotalSuccess {
			res := (hunterTotal + 100) / 100
			fmt.Println("res为", res)
			for i := 1; i <= res; i++ {
				HunterSearch(Policylist.Task, Policylist.Rule, 100, i)
			}
			return true, "id"
		}
	}
	return true, "id"
}

//fofa
func FofaSearch(task, rule string, size, page int) bool {
	email, key, ok := GetPlat("fofa")
	//数据库中存在fofa的账号
	if ok {
		rule = base64.StdEncoding.EncodeToString([]byte(rule))
		url := fmt.Sprintf("https://fofa.info//api/v1/search/all?email=%s&key=%s&qbase64=%s&size=%d&page=%d&fields=host,title,ip,domain,port,server,protocol", email, key, rule, size, page)
		fmt.Println(url)
		res, err := http.Get(url)
		if err != nil {
			log.Fatal(err)
		}
		defer res.Body.Close()
		result, _ := ioutil.ReadAll(res.Body)
		value, _ := gjson.LoadContent(string(result))
		for _, v := range value.GetArray("results") {
			data := make(map[string]interface{})
			data["task"] = task
			data["host"] = v.([]interface{})[0]
			data["title"] = v.([]interface{})[1]
			data["ip"] = v.([]interface{})[2]
			data["domain"] = v.([]interface{})[3]
			data["port"] = v.([]interface{})[4]
			data["server"] = v.([]interface{})[5]
			data["protocol"] = v.([]interface{})[6]
			ipisexit := fmt.Sprintf("%s", v.([]interface{})[2])
			portisexit := fmt.Sprintf("%s", v.([]interface{})[4])
			b, _ := ExistFofalist(ipisexit, portisexit)
			fmt.Println("查询数据库中资产是否存在", ipisexit, portisexit, b)
			if !b {
				AddFofalist(data)
			}
		}
		return true
	} else {
		return false
	}
}

func FofaSearchTotal(rule string) (total int, errmsg string) {
	email, key, ok := GetPlat("fofa")
	if ok {
		rule = base64.StdEncoding.EncodeToString([]byte(rule))
		url := fmt.Sprintf("https://fofa.info//api/v1/search/all?email=%s&key=%s&qbase64=%s&size=1&page=1&fields=host,title,ip,domain,port,country,header,server,protocol", email, key, rule)
		res, err := http.Get(url)
		fmt.Println(url)
		if err != nil {
			log.Fatal(err)
		}
		defer res.Body.Close()
		result, _ := ioutil.ReadAll(res.Body)

		value, _ := gjson.LoadContent(string(result))

		//errmsg
		fofaError := fmt.Sprintf("%v", value.GetArray("error"))

		fmt.Println("fofaError", fofaError)

		if fofaError == "[true]" {
			errmsg = fmt.Sprintf("%v", value.GetArray("errmsg"))
			return 0, errmsg
		} else {
			a := value.GetArray("size")
			var b string
			b = fmt.Sprintf("%v", a[0])
			total, _ := strconv.Atoi(b)
			return total, "true"
		}
	} else {
		return 0, "没有结果"
	}

}

// hunter
func HunterSearch(task, rule string, size, page int) bool {
	username, key, ok := GetPlat("hunter")
	//数据库中存在hunter的账号
	if ok {
		rule = base64.StdEncoding.EncodeToString([]byte(rule))
		url := fmt.Sprintf("https://hunter.qianxin.com/openApi/search?username=%s&api-key=%s&search=%s&page=%d&page_size=%d&is_web=1", username, key, rule, page, size)
		fmt.Println(url)
		res, err := http.Get(url)
		if err != nil {
			log.Fatal(err)
		}
		defer res.Body.Close()
		result, _ := ioutil.ReadAll(res.Body)
		value, _ := gjson.LoadContent(string(result))

		for _, v := range value.GetArray("data.arr") {
			data := make(map[string]interface{})
			data["task"] = task
			data["url"] = fmt.Sprintf("%v", v.(map[string]interface{})["url"])
			data["title"] = fmt.Sprintf("%v", v.(map[string]interface{})["web_title"])
			data["ip"] = fmt.Sprintf("%v", v.(map[string]interface{})["ip"])
			data["domain"] = fmt.Sprintf("%v", v.(map[string]interface{})["domain"])
			data["port"] = fmt.Sprintf("%v", v.(map[string]interface{})["port"])
			data["protocol"] = fmt.Sprintf("%v", v.(map[string]interface{})["protocol"])
			data["code"] = fmt.Sprintf("%v", v.(map[string]interface{})["status_code"])
			data["number"] = fmt.Sprintf("%v", v.(map[string]interface{})["number"])
			data["company"] = fmt.Sprintf("%v", v.(map[string]interface{})["company"])
			data["isp"] = fmt.Sprintf("%v", v.(map[string]interface{})["isp"])
			AddHunterlist(data)

			ipisexit := fmt.Sprintf("%v", v.(map[string]interface{})["ip"])
			portisexit := fmt.Sprintf("%v", v.(map[string]interface{})["port"])
			b, _ := ExistHunterlist(ipisexit, portisexit)
			fmt.Println("查询数据库中资产是否存在", ipisexit, portisexit, b)
			if !b {
				AddHunterlist(data)
			}
		}
		return true
	} else {
		return false
	}
}

func HunterSearchTotal(rule string) (total int, total_success bool) {
	username, key, ok := GetPlat("hunter")
	//数据库中存在hunter的账号
	if ok {
		rule = base64.StdEncoding.EncodeToString([]byte(rule))
		url := fmt.Sprintf("https://hunter.qianxin.com/openApi/search?username=%s&api-key=%s&search=%s&page=1&page_size=1&is_web=1", username, key, rule)
		fmt.Println(url)
		res, err := http.Get(url)
		if err != nil {
			log.Fatal(err)
		}
		defer res.Body.Close()
		result, _ := ioutil.ReadAll(res.Body)
		value, _ := gjson.LoadContent(string(result))

		a := value.GetArray("data.total")
		var b string
		b = fmt.Sprintf("%v", a[0])
		total, _ := strconv.Atoi(b)
		return total, true
	} else {
		return 0, false
	}
}

//Zoomeye 返回结果不含端口，且比较杂乱

func ZoomeyeSearchTotal(rule string) (total int, errmsg string) {
	_, password, ok := GetPlat("zoomeye")
	if ok {
		rule = gurl.Encode(rule)
		url := fmt.Sprintf("https://api.zoomeye.org/host/search?query=%s&page=1", rule)
		fmt.Println(url)
		response := g.Client().SetHeader("API-KEY", password).GetContent(url)
		value, _ := gjson.LoadContent(string(response))
		total := value.GetArray("total")
		fmt.Println(total)
	}
	return
}

func ZoomeyeSearch(task, rule string) (total int, errmsg string) {
	_, password, ok := GetPlat("zoomeye")
	if ok {
		rule = gurl.Encode(rule)
		url := fmt.Sprintf("https://api.zoomeye.org/web/search?query=%s&page=1", rule)
		fmt.Println(url)
		response := g.Client().SetHeader("API-KEY", password).GetContent(url)
		value, _ := gjson.LoadContent(string(response))

		for _, v := range value.GetArray("matches") {
			fmt.Println(v.(map[string]interface{})["ip"])
			fmt.Println(v.(map[string]interface{})["domains"])
			fmt.Println(v.(map[string]interface{})["site"])
		}
	}
	return
}
