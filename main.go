package main

import (
	"XScan/models"
	"XScan/routers"
	"fmt"
	"github.com/fvbock/endless"
	"github.com/gogf/gf/frame/g"
	"syscall"
	"time"
)

func init() {
	models.Setup()
}
func main() {
	endless.DefaultReadTimeOut = 60 * time.Second
	endless.DefaultWriteTimeOut = 60 * time.Second
	endless.DefaultMaxHeaderBytes = 1 << 20

	endPoint := fmt.Sprintf(":%d", 18000)

	server := endless.NewServer(endPoint, routers.InitRouter())
	server.BeforeBegin = func(add string) {
		g.Log().Infof("Actual pid is %d", syscall.Getpid())
	}
	err := server.ListenAndServe()
	if err != nil {
		g.Log().Infof("Server err: %v", err)
	}

}
