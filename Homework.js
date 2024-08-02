EX2: Tìm phần tử lớn nhất trong mảng:

Bài toán: Cho một mảng các số, hãy sử dụng reduce để tìm ra phần tử lớn nhất trong mảng.
Ví dụ: [3, 1, 4, 1, 5, 9, 2] sẽ cho kết quả 9.
code
var number = [3, 1, 4, 1, 5, 9, 2];
function factorial(array){
  var handfactorial = function (accumulator, currentValue){
    return currentValue > accumulator ? currentValue : accumulator;
  }
  var result = array.reduce(handfactorial, 0);
  return result;
}

EX3: Đếm số lần xuất hiện của từng phần tử trong mảng:

Bài toán: Cho một mảng các chuỗi hoặc số, hãy sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử.
Ví dụ: ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'] sẽ cho kết quả { apple: 2, banana: 3, orange: 1 }.
