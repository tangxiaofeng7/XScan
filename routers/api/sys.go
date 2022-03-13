package api

import (
	"XScan/models"
	"XScan/pkg/e"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gogf/gf/frame/g"
	"net/http"
)

func GetServerInfo(c *gin.Context) {
	server, err := models.GetServerInfo()
	if err != nil {
		g.Log().Error("获取服务器状态失败", err)
	}
	fmt.Println(server)

	code := e.SUCCESS

	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
		"data": server,
	})
}
