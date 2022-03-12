package models

import (
	"time"
)

type Fofalist struct {
	*Model
	Task        string `json:"task"`
	Host        string `json:"host"`
	Title       string `json:"title"`
	Ip          string `json:"ip"`
	Domain      string `json:"domain"`
	Port        string `json:"port"`
	Server      string `json:"server"`
	Protocol    string `json:"protocol"`
	Iswhite     bool   `json:"iswhite"`
	CreatedTime string `json:"created_time"`
	UpdatedTime string `json:"updated_time"`
}

func AddFofalist(data map[string]interface{}) {
	fofalist := Fofalist{
		Task:        data["task"].(string),
		Host:        data["host"].(string),
		Title:       data["title"].(string),
		Ip:          data["ip"].(string),
		Domain:      data["domain"].(string),
		Port:        data["port"].(string),
		Server:      data["server"].(string),
		Protocol:    data["protocol"].(string),
		Iswhite:     false,
		CreatedTime: time.Now().Format("2006-01-02 15:04:05"),
		UpdatedTime: time.Now().Format("2006-01-02 15:04:05"),
	}
	db.AutoMigrate(&fofalist)
	db.Create(&fofalist)
}

func GetFofalist(pageNum int, pageSize int, maps interface{}) (fofalist []Fofalist) {
	dbTmp := db
	querys := maps.(map[string]interface{})

	if querys["task"] != nil {
		dbTmp = dbTmp.Where("task LIKE ?", "%"+querys["task"].(string)+"%")
	}
	if querys["host"] != nil {
		dbTmp = dbTmp.Where("host LIKE ?", "%"+querys["host"].(string)+"%")
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
	if querys["server"] != nil {
		dbTmp = dbTmp.Where("server LIKE ?", "%"+querys["server"].(string)+"%")
	}
	if querys["protocol"] != nil {
		dbTmp = dbTmp.Where("protocol LIKE ?", "%"+querys["protocol"].(string)+"%")
	}

	dbTmp.Offset(pageNum).Limit(pageSize).Order("id  desc").Where("iswhite = ?", false).Find(&fofalist)
	return
}

func GetFofalistTotal(maps interface{}) (count int) {
	dbTmp := db
	querys := maps.(map[string]interface{})

	if querys["task"] != nil {
		dbTmp = dbTmp.Where("task LIKE ?", "%"+querys["task"].(string)+"%")
	}
	if querys["host"] != nil {
		dbTmp = dbTmp.Where("host LIKE ?", "%"+querys["host"].(string)+"%")
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
	if querys["server"] != nil {
		dbTmp = dbTmp.Where("server LIKE ?", "%"+querys["server"].(string)+"%")
	}
	if querys["protocol"] != nil {
		dbTmp = dbTmp.Where("protocol LIKE ?", "%"+querys["protocol"].(string)+"%")
	}

	dbTmp.Model(&Fofalist{}).Where("iswhite = ?", false).Count(&count)
	return
}

func ExistFofalist(ip, port string) (bool, int) {
	var fofalist Fofalist
	db.Select("id").Where("ip = ? AND  port = ?", ip, port).First(&fofalist)
	if fofalist.ID > 0 {
		return true, fofalist.ID
	}
	return false, fofalist.ID
}

//AddFofaWhite

func EditFofaWhite(id int, data interface{}) bool {
	db.Model(&Fofalist{}).Where("id = ?", id).Updates(data)

	return true
}

//获取welcome数据
func GetValueByDay(updateTime string) (count int) {
	db.Model(&Fofalist{}).Where("updated_time LIKE ?", "%"+updateTime+"%").Count(&count)
	return
}
