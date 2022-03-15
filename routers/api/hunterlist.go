package api

import (
	"XScan/models"
	"XScan/pkg/e"
	"XScan/pkg/utils"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/xuri/excelize/v2"
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

//DownHunterList
func DownHunterList(c *gin.Context) {

	f := excelize.NewFile()
	f.SetCellValue("Sheet1", "A1", "id")
	f.SetCellValue("Sheet1", "B1", "task")
	f.SetCellValue("Sheet1", "C1", "url")
	f.SetCellValue("Sheet1", "D1", "title")
	f.SetCellValue("Sheet1", "E1", "ip")
	f.SetCellValue("Sheet1", "F1", "domain")
	f.SetCellValue("Sheet1", "G1", "port")
	f.SetCellValue("Sheet1", "H1", "protocol")
	f.SetCellValue("Sheet1", "I1", "code")
	f.SetCellValue("Sheet1", "J1", "number")
	f.SetCellValue("Sheet1", "K1", "company")
	f.SetCellValue("Sheet1", "L1", "isp")

	result := models.GetAllDownHunterList()

	for i, v := range result {
		f.SetCellValue("Sheet1", "A"+strconv.Itoa(i+2), v.ID)
		f.SetCellValue("Sheet1", "B"+strconv.Itoa(i+2), v.Task)
		f.SetCellValue("Sheet1", "C"+strconv.Itoa(i+2), v.Url)
		f.SetCellValue("Sheet1", "D"+strconv.Itoa(i+2), v.Title)
		f.SetCellValue("Sheet1", "E"+strconv.Itoa(i+2), v.Ip)
		f.SetCellValue("Sheet1", "F"+strconv.Itoa(i+2), v.Domain)
		f.SetCellValue("Sheet1", "G"+strconv.Itoa(i+2), v.Port)
		f.SetCellValue("Sheet1", "H"+strconv.Itoa(i+2), v.Protocol)
		f.SetCellValue("Sheet1", "I"+strconv.Itoa(i+2), v.Code)
		f.SetCellValue("Sheet1", "J"+strconv.Itoa(i+2), v.Number)
		f.SetCellValue("Sheet1", "K"+strconv.Itoa(i+2), v.Company)
		f.SetCellValue("Sheet1", "L"+strconv.Itoa(i+2), v.Isp)

	}

	if err := f.SaveAs("hunterliust.xlsx"); err != nil {
		fmt.Println(err)
	}

	c.Writer.Header().Add("Content-Disposition", fmt.Sprintf("attachment; filename=hunterliust.xlsx"))
	c.Writer.Header().Add("Content-Type", "application/octet-stream")

	c.File("./hunterliust.xlsx")

}
