package main

import (
	// "context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
)

func handleSignal(signals <-chan os.Signal, done chan<- bool) {
	signal := <-signals

	// TODO: maybe use formatted print instead
	fmt.Println("signal ", signal, " received")

	done <- true
}

func cleanup() {
	fmt.Println("fill me in!")
}

func init() {
	fmt.Println("In init")
}

func main() {
	// ctx := context.TODO()

	// TODO: could we put this stuff in a function
	signals := make(chan os.Signal, 1)

	// TODO: should we include any more maybe SIGQUIT, SIGABRT, SIGKILL?
	// is there a way to pass as a slice
	signal.Notify(signals, syscall.SIGHUP, syscall.SIGINT, syscall.SIGTERM)

	done := make(chan bool, 1)

	go handleSignal(signals, done)

	fmt.Println("waiting for signal")
	<-done
	// Run as goroutine?
	cleanup()
}
