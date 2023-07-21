Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.

dịch:
Nhiệm vụ của bạn là tạo hai hàm ( max và min, hoặc maximum và minimum, v.v., tùy thuộc vào ngôn ngữ ) nhận một danh sách các số nguyên làm đầu vào và trả về số lớn nhất và nhỏ nhất trong danh sách đó, tương ứng.

Ví dụ (Đầu vào -> Đầu ra)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
ghi chú
Bạn có thể cân nhắc rằng sẽ không có bất kỳ mảng/vectơ trống nào.

code:
function min(list) {
    let minValue = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < minValue) {
            minValue = list[i];
        }
    }
    return minValue;
}

function max(list) {
    let maxValue = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > maxValue) {
            maxValue = list[i];
        }
    }
    return maxValue;
}
console.log(min([4,6,2,1,9,63,-134,566])); // Output: -134
console.log(max([4,6,2,1,9,63,-134,566])); // Output: 566

console.log(min([-52, 56, 30, 29, -54, 0, -110])); // Output: -110
console.log(max([-52, 56, 30, 29, -54, 0, -110])); // Output: 56

console.log(min([42, 54, 65, 87, 0])); // Output: 0
console.log(max([42, 54, 65, 87, 0])); // Output: 87

console.log(min([5])); // Output: 5
console.log(max([5])); // Output: 5
