package models

import (
	"strconv"
	"time"
)

type Pocscanlist struct {
	*Model
	Task        string `json:"task"`
	Scantool    string `json:"scantool"`
	Rule        string `json:"rule"`
	CreatedTime string `json:"created_time"`
	UpdatedTime string `json:"updated_time"`
	Target      string `json:"target"`
	Scanstatus  string `json:"scanstatus"`
}

func GetPocscanlist(pageNum int, pageSize int, maps interface{}) (pocscanlist []Pocscanlist) {
	dbTmp := db
	querys := maps.(map[string]interface{})

	if querys["task"] != nil {
		dbTmp = dbTmp.Where("task LIKE ?", "%"+querys["task"].(string)+"%")
	}
	if querys["scantool"] != nil {
		dbTmp = dbTmp.Where("scantool LIKE ?", "%"+querys["scantool"].(string)+"%")
	}
	if querys["rule"] != nil {
		dbTmp = dbTmp.Where("rule LIKE ?", "%"+querys["rule"].(string)+"%")
	}
	if querys["target"] != nil {
		dbTmp = dbTmp.Where("target LIKE ?", "%"+querys["target"].(string)+"%")
	}

	dbTmp.Offset(pageNum).Limit(pageSize).Order("id  desc").Find(&pocscanlist)
	return
}

func GetPocscanTotal(maps interface{}) (count int) {
	dbTmp := db
	querys := maps.(map[string]interface{})

	if querys["task"] != nil {
		dbTmp = dbTmp.Where("task LIKE ?", "%"+querys["task"].(string)+"%")
	}
	if querys["scantool"] != nil {
		dbTmp = dbTmp.Where("scantool LIKE ?", "%"+querys["scantool"].(string)+"%")
	}
	if querys["rule"] != nil {
		dbTmp = dbTmp.Where("rule LIKE ?", "%"+querys["rule"].(string)+"%")
	}
	if querys["target"] != nil {
		dbTmp = dbTmp.Where("target LIKE ?", "%"+querys["target"].(string)+"%")
	}

	dbTmp.Model(&Pocscanlist{}).Count(&count)
	return
}

func AddPocscanlist(data map[string]interface{}) (id int) {
	pocscanlist := Pocscanlist{
		Task:        data["task"].(string),
		Scantool:    data["scantool"].(string),
		Rule:        data["rule"].(string),
		CreatedTime: time.Now().Format("2006-01-02 15:04:05"),
		UpdatedTime: time.Now().Format("2006-01-02 15:04:05"),
		Target:      data["target"].(string),
		Scanstatus:  "0",
	}
	db.AutoMigrate(&pocscanlist)
	db.Create(&pocscanlist)
	return pocscanlist.ID
}

func EditPocscanlist(id int, data interface{}) bool {
	db.Model(&Pocscanlist{}).Where("id = ?", id).Updates(data)
	return true
}

func SearchScanLastProcess() (pocscanlist Pocscanlist) {
	db.Last(&pocscanlist)
	return
}

//DeletePocscan
func DeletePocscan(id int) (bool, int) {
	db.Where("id = " + strconv.Itoa(id)).Delete(&Pocscanlist{})
	return true, id
}
