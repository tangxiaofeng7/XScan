package main

import (
	"XScan/models"
	"XScan/routers"
	"fmt"
	"github.com/fvbock/endless"
	"log"
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
		log.Printf("Actual pid is %d", syscall.Getpid())
	}
	err := server.ListenAndServe()
	if err != nil {
		log.Printf("Server err: %v", err)
	}

}
