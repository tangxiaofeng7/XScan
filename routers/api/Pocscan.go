package api

import (
	"XScan/models"
	"XScan/pkg/e"
	"XScan/pkg/utils"
	"XScan/service"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
	"time"
)

func GetPocscanlist(c *gin.Context) {

	task := c.Query("task")
	scantool := c.Query("scantool")
	rule := c.Query("rule")
	target := c.Query("target")

	maps := make(map[string]interface{})

	if task != "" {
		maps["task"] = task
	}
	if scantool != "" {
		maps["scantool"] = scantool
	}
	if rule != "" {
		maps["rule"] = rule
	}
	if target != "" {
		maps["target"] = target
	}

	code1 := e.SUCCESS
	pageSize, _ := strconv.Atoi(c.Query("pageSize"))
	data := models.GetPocscanlist(utils.GetPage(c), pageSize, maps)
	total := models.GetPocscanTotal(maps)

	c.JSON(http.StatusOK, gin.H{
		"code":  code1,
		"msg":   e.GetMsg(code1),
		"data":  data,
		"total": total,
	})
}

//AddPocScan
func AddPocScan(c *gin.Context) {
	task := c.Query("task")
	rule := c.Query("rule")
	scantool := c.Query("scantool")

	code := e.SUCCESS
	data := make(map[string]interface{})
	data["task"] = task
	data["scantool"] = scantool
	data["rule"] = rule

	nowTime := time.Now().Format("2006-01-02 15:04:05")
	data["created_time"] = nowTime
	data["updated_time"] = nowTime
	data["scanstatus"] = 0
	res := models.SearchScanLastProcess()

	if task == "单个URL" {
		urlname := c.Query("urlname")
		data["target"] = urlname

		if res.Scanstatus != "0" {
			id := models.AddPocscanlist(data)
			go func() {
				service.Xrayscanone(id, urlname)
			}()
		} else {
			task = "上一个任务还未完成"
		}

	} else if task == "目标项目" {
		taskname := c.Query("taskname")
		data["target"] = taskname

		if res.Scanstatus != "0" {
			go func() {
				id := models.AddPocscanlist(data)
				service.XrayScanAll(id, taskname)
			}()
		} else {
			task = "上一个任务还未完成"
		}
	}

	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
		"data": task,
	})
}

type Pocscan struct {
	ID []int `json:"id"`
}

func DelPocscanlist(c *gin.Context) {
	json := Pocscan{}
	c.BindJSON(&json)
	var code int
	data := make(map[string]string)

	fmt.Println("json.ID", json.ID)
	for _, v := range json.ID {
		a, id := models.DeletePocscan(v)
		fmt.Println("a", a)
		fmt.Println("id", id)

		if a {
			code = e.SUCCESS
		} else {
			code = e.ERROR
			data["id"] = strconv.Itoa(id)
		}
	}

	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
		"data": data,
	})
}
