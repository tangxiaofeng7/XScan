package utils

import (
	"github.com/gin-gonic/gin"
	"strconv"
)

func GetPage(c *gin.Context) int {
	result := 0
	pagesizetmp := c.Query("pageSize")
	pagesize, _ := strconv.Atoi(pagesizetmp)

	page, _ := strconv.Atoi(c.Query("current"))

	if page > 0 {
		result = (page - 1) * pagesize
	}

	return result
}
