function fibonacciOptimized(n) {
    if (n < 2) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(fibonacci(2)) // 1
console.log(fibonacci(3)) // 1
console.log(fibonacci(7)) // 8

// Big(O) - time - O(n) 
// Big(O) - space - O(1) - interms of space this is best!

// Uses Bottom-Up Dynamic Programming technique

//https://replit.com/@Codevolution/JavaScript-Algorithms#math/power-of-two.js