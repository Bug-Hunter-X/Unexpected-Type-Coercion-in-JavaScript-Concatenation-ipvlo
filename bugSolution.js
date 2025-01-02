function foo(a, b) {
  return String(a) + String(b);
}

console.log(foo(1, '2')); // Output: "12"

function bar(a,b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; //add numbers
    } else {
        return String(a) + String(b); // Concatenate strings
    }
}
console.log(bar(1,2)); // Output: 3
console.log(bar(1, '2')); // Output: "12"