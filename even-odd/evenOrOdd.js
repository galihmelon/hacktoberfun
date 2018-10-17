var stdin = process.openStdin();

console.info("Please enter a number: ")
stdin.addListener("data", function(d) {
    evenOrOdd(d)
    console.info("Please enter another number: ")
  });

function evenOrOdd(input) {
    if (isEven(input)) {
        console.info("The number you entered is even");
    } else {
        console.info("The number you entered is odd");
    }
}

function isEven(input) {
    return input % 2 === 0;
}
