package routers

import (
	"XScan/pkg/utils"
	"XScan/routers/api"
	"github.com/gin-gonic/gin"
	"net/http"
)

func InitRouter() *gin.Engine {
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	r.Use(Cors())

	//登陆接口
	r.POST("/api/login", api.Login)
	r.GET("/api/currentUser", api.CurrentUser)
	r.GET("/api/downfofaList", api.DownFofaList)
	r.GET("/api/downhunterList", api.DownHunterList)

	apiv1 := r.Group("/api")
	apiv1.Use(utils.JWT())
	{
		//平台配置
		apiv1.GET("/platform", api.GetPlatform)
		apiv1.PUT("/platform", api.EditPaltform)
		//策略配置
		apiv1.GET("/policy", api.GetPolicy)
		apiv1.POST("/policy", api.AddPolicy)
		apiv1.PUT("/policy", api.EditPolicy)
		apiv1.DELETE("/policy", api.DelPolicy)
		//执行侧露
		apiv1.POST("/policyDo", api.DoPolicy)
		//fofa结果
		apiv1.GET("/fofalist", api.GetFofalist)
		apiv1.POST("/fofalist", api.AddFofaWhite)
		//apiv1.POST("/downfofaList", api.DownFofaList)

		//hunter结果
		apiv1.GET("/hunterlist", api.GetHunterlist)
		apiv1.POST("/hunterlist", api.AddhunterWhite)
		//欢迎界面
		apiv1.GET("/welcome", api.GetWelcome)
		//用户管理
		apiv1.PUT("/editPass", api.EditPass)
		apiv1.GET("/current", api.CurrentUser)
		//服务器状态
		apiv1.GET("/serverInfo", api.GetServerInfo) // 获取服务器信息
	}
	return r
}

//跨域

func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Headers", "Content-Type,AccessToken,X-CSRF-Token, Authorization,Token,X-TOKEN ")
		c.Header("Access-Control-Allow-Methods", "POST, GET,PUT, DELETE, OPTIONS")
		c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type")
		c.Header("Access-Control-Allow-Credentials", "true")

		//放行所有OPTIONS方法
		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}
		// 处理请求
		c.Next()
	}
}
