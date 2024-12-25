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
