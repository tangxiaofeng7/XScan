package api

import (
	"XScan/models"
	"XScan/pkg/e"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

func GetPlatform(c *gin.Context) {
	data := models.GetPlatform()
	code := e.SUCCESS

	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
		"data": data,
	})
}

func EditPaltform(c *gin.Context) {
	json := make(map[string]interface{})
	c.BindJSON(&json)
	id := fmt.Sprintf("%v", json["id"])
	username := fmt.Sprintf("%v", json["username"])
	password := fmt.Sprintf("%v", json["password"])

	idint, _ := strconv.Atoi(id)
	maps := make(map[string]interface{})
	maps["username"] = username
	maps["password"] = password

	code := e.SUCCESS
	a := models.EditPaltform(idint, maps)
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
