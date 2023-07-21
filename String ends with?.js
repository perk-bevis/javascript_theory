Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

dịch:
Hoàn thành giải pháp để nó trả về true nếu đối số (chuỗi) đầu tiên được truyền kết thúc bằng đối số thứ 2 (cũng là một chuỗi).

Ví dụ:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

code:
Phương endsWith()thức xác định xem một chuỗi có kết thúc bằng các ký tự của một chuỗi đã chỉ định, trả về true hoặc false khi thích hợp.
function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution('abc', 'bc'));  returns true
console.log(solution('abc', 'd'));   returns false
