# Unexpected Type Coercion in JavaScript Concatenation

This repository demonstrates a common but easily overlooked issue in JavaScript: type coercion during string concatenation.  The example shows how JavaScript implicitly converts numbers to strings when using the `+` operator with strings. This can result in unexpected behavior if not carefully managed.

The `bug.js` file contains the problematic code, while `bugSolution.js` offers a solution.

## How to reproduce

1. Clone this repository.
2. Run the code using a JavaScript engine (e.g., Node.js): `node bug.js`

You'll observe the unexpected concatenation due to type coercion.

## Solution

The `bugSolution.js` demonstrates how to avoid this issue by explicitly converting the operands to the desired type before performing the operation, using `toString()` or Number() for explicit type casting.