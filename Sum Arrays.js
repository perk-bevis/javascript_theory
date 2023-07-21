Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.

dịch
Viết hàm nhận vào một mảng các số và trả về tổng của các số đó. Các số có thể là số âm hoặc không nguyên. Nếu mảng không chứa bất kỳ số nào thì bạn nên trả về 0.

ví dụ
Đầu vào: [1, 5.2, 4, 0, -1]
Đầu ra:9.2

Đầu vào: []
Đầu ra:0

Đầu vào: [-2.398]
Đầu ra:-2.398

giả định
Bạn có thể cho rằng bạn chỉ được cho những con số.
Bạn không thể giả sử kích thước của mảng.
Bạn có thể giả sử rằng bạn có một mảng và nếu mảng trống, hãy trả về 0.
Những gì chúng tôi đang thử nghiệm
Chúng tôi đang thử nghiệm các vòng lặp cơ bản và các phép toán. Điều này dành cho những người mới bắt đầu học các vòng lặp và các phép toán.
Người dùng nâng cao có thể thấy điều này cực kỳ dễ dàng và có thể dễ dàng viết điều này trong một dòng.
code:
function sum(numbers) {
  "use strict";
  
  let total = 0;
  
  for (const number of numbers) {
    total += number;
  }
  
  return total;
}
console.log(sum([1, 5.2, 4, 0, -1]));   // Output: 9.2
console.log(sum([]));                 // Output: 0
console.log(sum([-2.398]));           // Output: -2.398
