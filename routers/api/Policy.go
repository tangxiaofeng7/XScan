package api

import (
	"XScan/models"
	"XScan/pkg/e"
	"XScan/pkg/utils"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
	"time"
)

func GetPolicy(c *gin.Context) {
	task := c.Query("task")
	platform := c.Query("platform")

	maps := make(map[string]interface{})

	if task != "" {
		maps["task"] = task
	}
	if platform != "" {
		maps["platform"] = platform
	}

	code := e.SUCCESS

	pageSize, _ := strconv.Atoi(c.Query("pageSize"))

	data := models.GetPolicylist(utils.GetPage(c), pageSize, maps)
	total := models.GetPolicylistTotal(maps)

	c.JSON(http.StatusOK, gin.H{
		"code":  code,
		"msg":   e.GetMsg(code),
		"data":  data,
		"total": total,
	})
}

func AddPolicy(c *gin.Context) {
	task := c.Query("task")
	platform := c.Query("platform")
	rule := c.Query("rule")
	code := e.SUCCESS
	data := make(map[string]interface{})
	nowTime := time.Now().Format("2006-01-02 15:04:05")
	data["task"] = task
	data["platform"] = platform
	data["rule"] = rule
	data["created_time"] = nowTime
	data["updated_time"] = nowTime
	models.AddPolicylist(data)
	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
		"data": task,
	})
}

func EditPolicy(c *gin.Context) {
	json := make(map[string]interface{})
	c.BindJSON(&json)
	id := fmt.Sprintf("%v", json["id"])
	rule := fmt.Sprintf("%v", json["rule"])
	idint, _ := strconv.Atoi(id)
	maps := make(map[string]interface{})
	maps["rule"] = rule
	nowTime := time.Now().Format("2006-01-02 15:04:05")
	maps["updated_time"] = nowTime
	maps["excute_time"] = "0"
	code := e.SUCCESS
	a := models.EditPolicylist(idint, maps)

	if a {
		code = e.SUCCESS
	} else {
		code = e.ERROR
	}
	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
	})
}

type Policy struct {
	ID []int `json:"id"`
}

//DelPolicy
func DelPolicy(c *gin.Context) {
	json := Policy{}
	c.BindJSON(&json)
	var code int
	data := make(map[string]string)
	for _, v := range json.ID {
		a, id := models.DelPolicylist(v)
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

//DoPolicy
func DoPolicy(c *gin.Context) {
	var data string
	json := make(map[string]interface{})
	c.BindJSON(&json)
	id := fmt.Sprintf("%v", json["id"])
	idint, _ := strconv.Atoi(id)
	Dobool, errmsg := models.DoPolicylist(idint)
	if Dobool {
		data = "查询正常"
	} else {
		data = errmsg
	}
	code := e.SUCCESS

	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
		"data": data,
	})
}
