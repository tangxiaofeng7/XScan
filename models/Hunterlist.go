package models

import "time"

type Hunterlist struct {
	*Model
	Task        string `json:"task"`
	Url         string `json:"url"`
	Title       string `json:"title"`
	Ip          string `json:"ip"`
	Domain      string `json:"domain"`
	Port        string `json:"port"`
	Protocol    string `json:"protocol"`
	Code        string `json:"code"`
	Number      string `json:"number"`
	Company     string `json:"company"`
	Isp         string `json:"isp"`
	Iswhite     bool   `json:"iswhite"`
	CreatedTime string `json:"created_time"`
	UpdatedTime string `json:"updated_time"`
}

func AddHunterlist(data map[string]interface{}) {
	hunterlist := Hunterlist{
		Task:        data["task"].(string),
		Url:         data["url"].(string),
		Title:       data["title"].(string),
		Ip:          data["ip"].(string),
		Domain:      data["domain"].(string),
		Port:        data["port"].(string),
		Protocol:    data["protocol"].(string),
		Code:        data["code"].(string),
		Number:      data["number"].(string),
		Company:     data["company"].(string),
		Isp:         data["isp"].(string),
		Iswhite:     false,
		CreatedTime: time.Now().Format("2006-01-02 15:04:05"),
		UpdatedTime: time.Now().Format("2006-01-02 15:04:05"),
	}
	db.AutoMigrate(&hunterlist)
	db.Create(&hunterlist)
}

func GetHunterlist(pageNum int, pageSize int, maps interface{}) (hunterlist []Hunterlist) {
	dbTmp := db
	querys := maps.(map[string]interface{})

	if querys["task"] != nil {
		dbTmp = dbTmp.Where("task LIKE ?", "%"+querys["task"].(string)+"%")
	}
	if querys["url"] != nil {
		dbTmp = dbTmp.Where("url LIKE ?", "%"+querys["url"].(string)+"%")
	}
	if querys["title"] != nil {
		dbTmp = dbTmp.Where("title LIKE ?", "%"+querys["title"].(string)+"%")
	}
	if querys["ip"] != nil {
		dbTmp = dbTmp.Where("ip LIKE ?", "%"+querys["ip"].(string)+"%")
	}
	if querys["domain"] != nil {
		dbTmp = dbTmp.Where("domain LIKE ?", "%"+querys["domain"].(string)+"%")
	}
	if querys["port"] != nil {
		dbTmp = dbTmp.Where("port LIKE ?", "%"+querys["port"].(string)+"%")
	}
	if querys["protocol"] != nil {
		dbTmp = dbTmp.Where("protocol LIKE ?", "%"+querys["protocol"].(string)+"%")
	}
	if querys["code"] != nil {
		dbTmp = dbTmp.Where("code LIKE ?", "%"+querys["code"].(string)+"%")
	}
	if querys["number"] != nil {
		dbTmp = dbTmp.Where("number LIKE ?", "%"+querys["number"].(string)+"%")
	}
	if querys["company"] != nil {
		dbTmp = dbTmp.Where("company LIKE ?", "%"+querys["company"].(string)+"%")
	}
	if querys["isp"] != nil {
		dbTmp = dbTmp.Where("isp LIKE ?", "%"+querys["isp"].(string)+"%")
	}

	dbTmp.Offset(pageNum).Limit(pageSize).Order("id  desc").Where("iswhite = ?", false).Find(&hunterlist)
	return
}

func GetHunterlistTotal(maps interface{}) (count int) {
	dbTmp := db
	querys := maps.(map[string]interface{})
	if querys["task"] != nil {
		dbTmp = dbTmp.Where("task LIKE ?", "%"+querys["task"].(string)+"%")
	}
	if querys["url"] != nil {
		dbTmp = dbTmp.Where("url LIKE ?", "%"+querys["url"].(string)+"%")
	}
	if querys["title"] != nil {
		dbTmp = dbTmp.Where("title LIKE ?", "%"+querys["title"].(string)+"%")
	}
	if querys["ip"] != nil {
		dbTmp = dbTmp.Where("ip LIKE ?", "%"+querys["ip"].(string)+"%")
	}
	if querys["domain"] != nil {
		dbTmp = dbTmp.Where("domain LIKE ?", "%"+querys["domain"].(string)+"%")
	}
	if querys["port"] != nil {
		dbTmp = dbTmp.Where("port LIKE ?", "%"+querys["port"].(string)+"%")
	}
	if querys["protocol"] != nil {
		dbTmp = dbTmp.Where("protocol LIKE ?", "%"+querys["protocol"].(string)+"%")
	}
	if querys["code"] != nil {
		dbTmp = dbTmp.Where("code LIKE ?", "%"+querys["code"].(string)+"%")
	}
	if querys["number"] != nil {
		dbTmp = dbTmp.Where("number LIKE ?", "%"+querys["number"].(string)+"%")
	}
	if querys["company"] != nil {
		dbTmp = dbTmp.Where("company LIKE ?", "%"+querys["company"].(string)+"%")
	}
	if querys["isp"] != nil {
		dbTmp = dbTmp.Where("isp LIKE ?", "%"+querys["isp"].(string)+"%")
	}

	dbTmp.Model(&Hunterlist{}).Where("iswhite = ?", false).Count(&count)
	return
}

func ExistHunterlist(ip, port string) (bool, int) {
	var hunterlist Hunterlist
	db.Select("id").Where("ip = ? AND  port = ?", ip, port).First(&hunterlist)
	if hunterlist.ID > 0 {
		return true, hunterlist.ID
	}
	return false, hunterlist.ID
}

//AddHunterWhite

func EditHunterWhite(id int, data interface{}) bool {
	db.Model(&Hunterlist{}).Where("id = ?", id).Updates(data)
	return true
}

func GetAllDownHunterList() (hunterlist []Hunterlist) {
	db.Order("id  desc").Where("iswhite = ?", false).Find(&hunterlist)
	return
}
