package api

import (
	"XScan/models"
	"XScan/pkg/e"
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

func GetWelcome(c *gin.Context) {

	nowTime := time.Unix(time.Now().Unix(), 0).Format("2006-01-02")
	nowTime1 := time.Now().Add(-time.Hour * 24).Format("2006-01-02")
	nowTime2 := time.Now().Add(-time.Hour * 48).Format("2006-01-02")
	nowTime3 := time.Now().Add(-time.Hour * 72).Format("2006-01-02")
	nowTime4 := time.Now().Add(-time.Hour * 96).Format("2006-01-02")
	nowTime5 := time.Now().Add(-time.Hour * 120).Format("2006-01-02")
	nowTime6 := time.Now().Add(-time.Hour * 144).Format("2006-01-02")

	time := models.GetValueByDay(nowTime)
	time1 := models.GetValueByDay(nowTime1)
	time2 := models.GetValueByDay(nowTime2)
	time3 := models.GetValueByDay(nowTime3)
	time4 := models.GetValueByDay(nowTime4)
	time5 := models.GetValueByDay(nowTime5)
	time6 := models.GetValueByDay(nowTime6)

	data := make(map[string]interface{})
	data["day"] = nowTime
	data["value"] = time
	data1 := make(map[string]interface{})
	data1["day"] = nowTime1
	data1["value"] = time1
	data2 := make(map[string]interface{})
	data2["day"] = nowTime2
	data2["value"] = time2
	data3 := make(map[string]interface{})
	data3["day"] = nowTime3
	data3["value"] = time3
	data4 := make(map[string]interface{})
	data4["day"] = nowTime4
	data4["value"] = time4
	data5 := make(map[string]interface{})
	data5["day"] = nowTime5
	data5["value"] = time5
	data6 := make(map[string]interface{})
	data6["day"] = nowTime6
	data6["value"] = time6

	Alldata := make([]map[string]interface{}, 0)
	Alldata = append(Alldata, data6, data5, data4, data3, data2, data1, data)

	code := e.SUCCESS

	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  e.GetMsg(code),
		"data": Alldata,
	})
}
