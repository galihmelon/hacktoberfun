package main

import "fmt"

func main() {
	fmt.Print("Enter a number: ")
	var input int
	fmt.Scan(&input)

	if isEven(input) {
		fmt.Print("The number you entered is even")
	} else {
		fmt.Print("The number you entered is odd")
	}
}

func isEven(number int) bool {
	return number%2 == 0
}
