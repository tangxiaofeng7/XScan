package models

import (
	"fmt"
	"github.com/gogf/gf/frame/g"
)

//GetXraysetup

func GetXraysetup() {
	c := g.Cfg()
	g.Config().SetFileName("config.yaml")
	version := c.Get("version")
	fmt.Println("version", version)
	g.Config().Set("version", 9.0)
	version1 := c.Get("version")

	fmt.Println("version", version1)

}
