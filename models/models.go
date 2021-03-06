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
	c := g.Cfg()

	mysql := c.Get("database.mysql")
	user := c.Get("database.user")
	password := c.Get("database.password")
	database := c.Get("database.database")

	var err error
	db, err = gorm.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8&parseTime=True&loc=Local",
		user,
		password,
		mysql,
		database))

	if err != nil {
		g.Log().Fatalf("数据库连接错误", err)
	} else {
		g.Log().Info("数据连接成功")
	}

	gorm.DefaultTableNameHandler = func(db *gorm.DB, defaultTableName string) string {
		return defaultTableName
	}

	db.SingularTable(true)
	db.LogMode(true)
}
