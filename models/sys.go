package models

import (
	"XScan/pkg/utils"
	"github.com/gogf/gf/frame/g"
)

func GetServerInfo() (server *utils.Server, err error) {
	var s utils.Server
	s.Os = utils.InitOS()
	if s.Cpu, err = utils.InitCPU(); err != nil {
		g.Log().Error("func utils.InitCPU() Failed", err.Error())
		return &s, err
	}
	if s.Rrm, err = utils.InitRAM(); err != nil {
		g.Log().Error("func utils.InitRAM() Failed", err.Error())
		return &s, err
	}
	if s.Disk, err = utils.InitDisk(); err != nil {
		g.Log().Error("func utils.InitDisk() Failed", err.Error())
		return &s, err
	}

	return &s, nil
}
