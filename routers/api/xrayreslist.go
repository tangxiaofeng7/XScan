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

func GetXrayRes(c *gin.Context) {
	url := c.Query("url")
	poc := c.Query("poc")
	snapshot := c.Query("snapshot")

	maps := make(map[string]interface{})

	if url != "" {
		maps["url"] = url
	}
	if poc != "" {
		maps["poc"] = poc
	}
	if snapshot != "" {
		maps["snapshot"] = snapshot
	}

	code := e.SUCCESS

	pageSize, _ := strconv.Atoi(c.Query("pageSize"))

	data := models.GetXrayres(utils.GetPage(c), pageSize, maps)
	total := models.GetXrayresTotal(maps)

	c.JSON(http.StatusOK, gin.H{
		"code":  code,
		"msg":   e.GetMsg(code),
		"data":  data,
		"total": total,
	})
}

type XrayRes struct {
	ID []int `json:"id"`
}

//Del
func DelXrayRes(c *gin.Context) {
	json := XrayRes{}
	c.BindJSON(&json)
	var code int
	data := make(map[string]string)

	fmt.Println("json.ID", json.ID)

	for _, v := range json.ID {
		a, id := models.DeleteXrayres(v)
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
