package models

import (
	"fmt"
	"github.com/gogf/gf/frame/g"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db *gorm.DB

type Model struct {
	ID int `gorm:"primary_key" json:"id"`
}

func Setup() {

	var err error
	db, err = gorm.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8&parseTime=True&loc=Local",
		"root",
		"woaini520",
		//"127.0.0.1:3306",
		"mysql",
		"xscan"))

	if err != nil {
		g.Log().Fatalf("数据库连接错误", err)
	}

	gorm.DefaultTableNameHandler = func(db *gorm.DB, defaultTableName string) string {
		return defaultTableName
	}

	db.SingularTable(true)
	db.LogMode(true)
}
