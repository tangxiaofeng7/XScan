package service

import (
	"sync"
)

func ForScan(id int, url string) {
	wg := sync.WaitGroup{}
	resCh := make(chan int)

	go func() {
		wg.Add(1)
		resCh <- Xrayscanone(id, url)
		defer wg.Done()
	}()

	//同时扫描的数量为5
	//num := 5
	//resCh := make(chan int)
	//
	//wg := sync.WaitGroup{}
	//
	//for i := 0; i < num; i++ {
	//	wg.Add(1)
	//	go func() {
	//		defer wg.Done()
	//		resCh <- Xrayscanone(id, url)
	//	}()
	//}
	//
	//go func() {
	//	defer close(resCh)
	//	wg.Wait()
	//}()
	//
	//for item := range resCh {
	//	fmt.Println("result:", item)
	//}
}
