package service

import (
	"XScan/models"
	"bufio"
	"encoding/json"
	"fmt"
	"github.com/gogf/gf/crypto/gmd5"
	"github.com/gogf/gf/encoding/gjson"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/os/gfile"
	"github.com/gogf/gf/os/gproc"
	"io"
	"os"
	"runtime"
	"strings"
	"sync"
	"time"
)

func Xrayscanone(id int, url string) int {
	system := runtime.GOOS
	outJson := time.Now().Format("2006-01-02-03:04:05") + ".json"
	maps := make(map[string]interface{})

	switch system {
	case "windows":
		{

		}
	case "linux":
		{
			cmd := fmt.Sprintf("./xray_linux_amd64 webscan --url %s --json-output %s", url, outJson)
			fmt.Println("cmd:", cmd)
			r, err := gproc.ShellExec(cmd)
			if err != nil {
				g.Log().Println(err)
			}
			fmt.Println("result:", r)
			maps["scanstatus"] = "100"
			models.EditPolicylist(id, maps)
			if gfile.Exists(outJson) {
				fmt.Println(outJson)
				XrayRes(outJson)
			}

			return id
		}
	case "darwin":
		{
			cmd := fmt.Sprintf("./xray_darwin_amd64 webscan --url %s --json-output %s", url, outJson)
			fmt.Println("cmd:", cmd)
			r, err := gproc.ShellExec(cmd)
			if err != nil {
				g.Log().Println(err)
			}
			fmt.Println("result:", r)
			maps["scanstatus"] = "100"
			models.EditPolicylist(id, maps)
			if gfile.Exists(outJson) {
				fmt.Println(outJson)
				XrayRes(outJson)
			}

			return id
		}
	}
	return 0
}

func XrayScanAll(id int, task string) {
	system := runtime.GOOS
	outJson := time.Now().Format("2006-01-02-03:04:05") + ".json"
	maps := make(map[string]interface{})
	maps["task"] = task
	FofaResul := models.GetFofaForScan(maps)

	fmt.Printf("%T\n", FofaResul)
	tempFile := time.Now().Format("2006-01-02-03:04:05") + ".txt"

	for k, v := range FofaResul {
		fmt.Println(k, v.Host)
		gfile.PutContentsAppend(tempFile, v.Host+"\n")
	}

	switch system {
	case "windows":
		{

		}
	case "linux":
		{
			cmd := fmt.Sprintf("./xray_linux_amd64 webscan --url-file %s --json-output %s", tempFile, outJson)
			fmt.Println("cmd:", cmd)

			go func() {
				r, err := gproc.ShellExec(cmd)
				if err != nil {
					g.Log().Println(err)
				}
				fmt.Println("result:", r)
				maps["scanstatus"] = "100"
				models.EditPolicylist(id, maps)
			}()
		}
	case "darwin":
		{
			cmd := fmt.Sprintf("./xray_darwin_amd64 webscan --url-file %s --json-output %s", tempFile, outJson)
			fmt.Println("cmd:", cmd)

			go func() {
				r, err := gproc.ShellExec(cmd)
				if err != nil {
					g.Log().Println(err)
				}
				fmt.Println("result:", r)
				maps["scanstatus"] = "100"
				models.EditPolicylist(id, maps)
			}()
		}
	}
}

type XrayResAll struct {
	CreateTime int64 `json:"create_time"`
	Detail     struct {
		Addr     string     `json:"addr"`
		Payload  string     `json:"payload"`
		Snapshot [][]string `json:"snapshot"`
		Extra    struct {
			Author string `json:"author"`
			Param  struct {
			} `json:"param"`
		} `json:"extra"`
	} `json:"detail"`
	Plugin string `json:"plugin"`
	Target struct {
		URL string `json:"url"`
	} `json:"target"`
}

var lock sync.Mutex

func XrayRes(filename string) {
	f, err := os.Open(filename)
	if err != nil {
		return
	}
	defer f.Close()

	buf := bufio.NewReader(f)
	for {
		defer func() {
			if err := recover(); err != nil {
				fmt.Println("xray into db err :", err)
			}
		}()
		var xrayResult XrayResAll

		lines, err := buf.ReadString('\n')
		if err != nil {
			if err == io.EOF {
				return
			}
			return
		}
		decoder := json.NewDecoder(strings.NewReader(lines))
		err = decoder.Decode(&xrayResult)
		if err != nil {
			fmt.Println("Decoder failed : ", err.Error())
		} else {
			j := gjson.New(xrayResult.Detail.Snapshot)
			snapshot := j.MustToJsonString()
			hash, _ := gmd5.EncryptString(xrayResult.Target.URL + xrayResult.Plugin)
			lock.Lock()
			data := make(map[string]interface{})
			data["url"] = xrayResult.Target.URL
			data["poc"] = xrayResult.Plugin
			data["hash"] = hash
			data["snapshot"] = snapshot
			models.AddXrayres(data)
			lock.Unlock()
		}
	}
}
