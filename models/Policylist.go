package models

import (
	"encoding/base64"
	"fmt"
	"github.com/gogf/gf/encoding/gjson"
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
	//fmt.Println(querys)

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
	db.Model(&Policylist{}).Where("id = ?", id).Updates(data)
	return true
}

func DelPolicylist(id int) (bool, int) {
	db.Where("id = " + strconv.Itoa(id)).Delete(&Policylist{})
	return true, id
}

//执行策略
func DoPolicylist(id int) (bool, int) {
	var Policylist Policylist
	maps := make(map[string]interface{})
	maps["excute_time"] = "100"
	EditPolicylist(id, maps)
	db.Where("id = " + strconv.Itoa(id)).Find(&Policylist)

	if Policylist.Platform == "fofa" {
		fmt.Println("fofa任务...doing...")
		total, total_success := FofaSearchTotal(Policylist.Rule)
		fmt.Println("total总数为", total)

		if total_success {
			res := (total + 500) / 500

			fmt.Println("res为", res)
			for i := 1; i <= res; i++ {
				FofaSearch(Policylist.Task, Policylist.Rule, 500, i)
			}
			return true, id
		}

	} else if Policylist.Platform == "zoomeye" {
		fmt.Println("zoomeye任务")
	} else if Policylist.Platform == "hunter" {
		fmt.Println("hunter任务")
	}

	return true, id
}

func FofaSearch(task, rule string, size, page int) bool {
	email, key, ok := GetPlat("fofa")
	//数据库中存在fofa的账号
	if ok {
		rule = base64.StdEncoding.EncodeToString([]byte(rule))
		url := fmt.Sprintf("https://fofa.info//api/v1/search/all?email=%s&key=%s&qbase64=%s&size=%d&page=%d&fields=title,ip,domain,port,server,protocol", email, key, rule, size, page)
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
			data["title"] = v.([]interface{})[0]
			data["ip"] = v.([]interface{})[1]
			data["domain"] = v.([]interface{})[2]
			data["port"] = v.([]interface{})[3]
			data["server"] = v.([]interface{})[4]
			data["protocol"] = v.([]interface{})[5]
			ipisexit := fmt.Sprintf("%s", v.([]interface{})[1])
			portisexit := fmt.Sprintf("%s", v.([]interface{})[3])
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

func FofaSearchTotal(rule string) (total int, total_success bool) {
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
		a := value.GetArray("size")
		var b string
		b = fmt.Sprintf("%v", a[0])

		total, _ := strconv.Atoi(b)

		return total, true
	} else {
		return 0, false
	}
}
