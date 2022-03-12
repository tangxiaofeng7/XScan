package api

import (
	"XScan/models"
	"XScan/pkg/e"
	"XScan/pkg/utils"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

func GetHunterlist(c *gin.Context) {

	task := c.Query("task")
	url := c.Query("url")
	title := c.Query("title")
	ip := c.Query("ip")
	domain := c.Query("domain")
	port := c.Query("port")
	protocol := c.Query("protocol")
	code := c.Query("code")
	number := c.Query("number")
	company := c.Query("company")
	isp := c.Query("isp")

	maps := make(map[string]interface{})

	if task != "" {
		maps["task"] = task
	}
	if url != "" {
		maps["url"] = url
	}
	if title != "" {
		maps["title"] = title
	}
	if ip != "" {
		maps["ip"] = ip
	}
	if domain != "" {
		maps["domain"] = domain
	}
	if port != "" {
		maps["port"] = port
	}
	if protocol != "" {
		maps["protocol"] = protocol
	}
	if code != "" {
		maps["code"] = code
	}
	if number != "" {
		maps["number"] = number
	}
	if company != "" {
		maps["company"] = company
	}
	if isp != "" {
		maps["isp"] = isp
	}

	code1 := e.SUCCESS
	pageSize, _ := strconv.Atoi(c.Query("pageSize"))
	data := models.GetHunterlist(utils.GetPage(c), pageSize, maps)
	total := models.GetHunterlistTotal(maps)

	c.JSON(http.StatusOK, gin.H{
		"code":  code1,
		"msg":   e.GetMsg(code1),
		"data":  data,
		"total": total,
	})
}

//AddhunterWhite

type HunterWhite struct {
	ID []int `json:"id"`
}

func AddhunterWhite(c *gin.Context) {

	json := HunterWhite{}
	c.BindJSON(&json)
	var code int
	maps := make(map[string]interface{})
	maps["iswhite"] = true

	for _, v := range json.ID {
		a := models.EditHunterWhite(v, maps)
		if a {
			code = e.SUCCESS
		} else {
			code = e.ERROR
		}
	}

	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
		"data": "",
	})
}
