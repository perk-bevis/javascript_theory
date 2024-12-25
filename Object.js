function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;

        case 'subtract':
            return a - b;

        case 'multiply':
            return a * b;

        case 'divide':
            if (b === 0) {
                return 'Cannot divide by zero.';
            }
            return a / b;

        default:
            return 'Operation not recognized. Please use add, subtract, multiply, or divide.';
    }
}

// Testing the function
console.log(calculate('add', 5, 3)); // Sửa lỗi nháy đơn bị sai
console.log(calculate('subtract', 5, 3));
console.log(calculate('multiply', 5, 3)); // Sửa lỗi tên hàm 'calculare'
console.log(calculate('divide', 5, 4)); // Kiểm tra chia cho 0
console.log(calculate('modulus', 5, 3)); // Test trường hợp không hợp lệ
🔴🔴🔴🔴
function calculate (operation, a, b) {
    const calculator = {
        add: a + b,
        subtract: a b,
        multiply: a * b,
        divide: b === 0 ? 'Cannot divide by zero.': a/b,
    };
    return calculator [operation];
}

// Testing the function
console.log(calculate('add', 5, 3));
console.log(calculate('subtract', 5, 3));
console.log(calculate('multiply', 5, 3));
console.log(calculate('divide', 9, 3));
console.log(calculate('divide', 5, 0));
console.log(calculate('modulus', 5, 3));
🔴🔴🔴🔴🔴🔴🔴
function calculate (operation, a, b) {
    const calculator = {
        add: () => a + b,
        subtract: () => ab,
        multiply: () => a * b,
        divide: () => b === 0? 'Cannot divide by zero.': a / b
    };
    if (typeof calculator [operation] === 'function') {
        return calculator [operation]();
    }
    return 'Operation not recognized. Please use add, subtract, multiply, or divide.';
}

// Testing the function
console.log(calculate('add', 5, 3));
console.log(calculate('subtract', 5, 5));
console.log(calculate('multiply', 5, 3));
console.log(calculate('divide', 9, 3));
console.log(calculate('divide', 5, 0));
console.log(calculate modulus, 3, 31);
🔴🔴🔴🔴🔴🔴
function calculate (operation, a, b) {
    const calculator = {
        add: () => a + b,
        subtract: () => ab,
        multiply: () => a * b,
        divide: () => b === 0 ? 'Cannot divide by zero.': a / b
    };
    const action = calculator [operation];
    if (action) {
        return action();
    }
    return 'Operation not recognized. Please use add, subtract,multiply, or divide.';
}

// Testing the function
console.log(calculate('add', 5, 3));
console.log(calculate('subtract', 5, 5));
console.log(calculate('multiply', 5, 3));
console.log(calculate('divide', 9, 3));
console.log(calculate('divide', 5,0));
console.log(calculate('modulus', 5, 3));
