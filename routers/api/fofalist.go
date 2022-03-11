package api

import (
	"XScan/models"
	"XScan/pkg/e"
	"XScan/pkg/utils"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

func GetFofalist(c *gin.Context) {
	task := c.Query("task")
	title := c.Query("title")
	ip := c.Query("ip")
	domain := c.Query("domain")
	port := c.Query("port")
	server := c.Query("server")
	protocol := c.Query("protocol")

	maps := make(map[string]interface{})

	if task != "" {
		maps["task"] = task
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
	if server != "" {
		maps["server"] = server
	}
	if protocol != "" {
		maps["protocol"] = protocol
	}

	code := e.SUCCESS
	pageSize, _ := strconv.Atoi(c.Query("pageSize"))
	data := models.GetFofalist(utils.GetPage(c), pageSize, maps)
	total := models.GetFofalistTotal(maps)

	c.JSON(http.StatusOK, gin.H{
		"code":  code,
		"msg":   e.GetMsg(code),
		"data":  data,
		"total": total,
	})
}

//AddFofaWhite

type FofaWhite struct {
	ID []int `json:"id"`
}

func AddFofaWhite(c *gin.Context) {

	json := FofaWhite{}
	c.BindJSON(&json)
	var code int
	maps := make(map[string]interface{})

	maps["iswhite"] = true

	fmt.Println(maps)

	for _, v := range json.ID {
		a := models.EditFofaWhite(v, maps)
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
