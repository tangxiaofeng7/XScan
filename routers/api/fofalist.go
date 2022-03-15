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

func GetFofalist(c *gin.Context) {
	host := c.Query("host")
	task := c.Query("task")
	title := c.Query("title")
	ip := c.Query("ip")
	domain := c.Query("domain")
	port := c.Query("port")
	server := c.Query("server")
	protocol := c.Query("protocol")

	maps := make(map[string]interface{})
	if host != "" {
		maps["host"] = host
	}
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

//DownFofaList

func DownFofaList(c *gin.Context) {

	f := excelize.NewFile()
	f.SetCellValue("Sheet1", "A1", "id")
	f.SetCellValue("Sheet1", "B1", "task")
	f.SetCellValue("Sheet1", "C1", "host")
	f.SetCellValue("Sheet1", "D1", "title")
	f.SetCellValue("Sheet1", "E1", "ip")
	f.SetCellValue("Sheet1", "F1", "domain")
	f.SetCellValue("Sheet1", "G1", "port")
	f.SetCellValue("Sheet1", "H1", "server")
	f.SetCellValue("Sheet1", "I1", "protocol")

	result := models.GetAllDownFofaList()

	for i, v := range result {
		f.SetCellValue("Sheet1", "A"+strconv.Itoa(i+2), v.ID)
		f.SetCellValue("Sheet1", "B"+strconv.Itoa(i+2), v.Task)
		f.SetCellValue("Sheet1", "C"+strconv.Itoa(i+2), v.Host)
		f.SetCellValue("Sheet1", "D"+strconv.Itoa(i+2), v.Title)
		f.SetCellValue("Sheet1", "E"+strconv.Itoa(i+2), v.Ip)
		f.SetCellValue("Sheet1", "F"+strconv.Itoa(i+2), v.Domain)
		f.SetCellValue("Sheet1", "G"+strconv.Itoa(i+2), v.Port)
		f.SetCellValue("Sheet1", "H"+strconv.Itoa(i+2), v.Server)
		f.SetCellValue("Sheet1", "I"+strconv.Itoa(i+2), v.Protocol)
	}

	if err := f.SaveAs("fofalist.xlsx"); err != nil {
		fmt.Println(err)
	}

	c.Writer.Header().Add("Content-Disposition", fmt.Sprintf("attachment; filename=fofalist.xlsx"))
	c.Writer.Header().Add("Content-Type", "application/octet-stream")

	c.File("./fofalist.xlsx")

}
