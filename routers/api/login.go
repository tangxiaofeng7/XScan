package api

import (
	"XScan/models"
	"XScan/pkg/e"
	"XScan/pkg/utils"
	"fmt"
	"github.com/astaxie/beego/validation"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

type auth struct {
	Username string `valid:"Required; MaxSize(50)"`
	Password string `valid:"Required; MaxSize(50)"`
}

func Login(c *gin.Context) {
	json := make(map[string]interface{})
	c.BindJSON(&json)
	username := fmt.Sprintf("%v", json["username"])
	password := fmt.Sprintf("%v", json["password"])

	valid := validation.Validation{}
	a := auth{Username: username, Password: password}
	ok, _ := valid.Valid(&a)

	data := make(map[string]interface{})
	code := e.INVALID_PARAMS

	if ok {
		isExist := models.CheckAuth(username, password)

		if isExist {
			token, err := utils.GenerateToken(username, password)
			if err != nil {
				code = e.ERROR
			} else {
				data["token"] = token
				code = e.SUCCESS
			}

		} else {
			code = e.ERROR
		}
	} else {
		for _, err := range valid.Errors {
			log.Println(err.Key, err.Message)
		}
	}

	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
		"data": data,
	})
}
func CurrentUser(c *gin.Context) {

	data := make(map[string]interface{})

	token := c.GetHeader("Authorization")
	claims, _ := utils.ParseToken(token)

	code := e.SUCCESS
	data["name"] = claims.Username
	data["avatar"] = "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
	data["title"] = "脚本小子"

	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
		"data": data,
	})
}
