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
