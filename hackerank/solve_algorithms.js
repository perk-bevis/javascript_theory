Complete the function solveMeFirst to compute the sum of two integers.
Example:
a = 7;
b = 3;
Return 10.
Function Description

Complete the solveMeFirst function in the editor below.

solveMeFirst has the following parameters:

int a: the first value
int b: the second value
Returns
 int: the sum of a and b
Constraints
1 <= a,b <= 1000;

Sample Input

a = 2
b = 3
Sample Output

5
dịch : Hoàn thành hàm solveMeFirst để tính tổng của hai số nguyên.
Example:
a = 7;
b = 3;
Return 10.
Mô tả chức năng

Hoàn thành hàm solveMeFirst trong trình chỉnh sửa bên dưới.

solveMeFirst có các tham số sau:
INT A: Giá trị đầu tiên
INT B: Giá trị thứ hai
Returns
 int: tổng của a và b
Constraints
1 <= a,b <= 1000;
Sample Input

a = 2
b = 3
Sample Output

5
code:
//Dòng này bật chế độ đọc dữ liệu từ luồng nhập chuẩn (stdin).
process.stdin.resume();
// Đây là cách thiết lập encoding (bảng mã) cho dữ liệu đọc từ stdin. Trong trường hợp này, encoding được đặt là ASCII.
process.stdin.setEncoding('ascii');

//Biến này sẽ lưu trữ dữ liệu đọc từ stdin.
var input_stdin = "";

//Mảng này sẽ lưu trữ dữ liệu đọc từ stdin sau khi đã được chia thành các dòng.
var input_stdin_array = "";
//Biến này dùng để theo dõi dòng hiện tại trong mảng dữ liệu.
var input_currentline = 0;

// Đoạn mã này xử lý sự kiện khi stdin đã được đọc xong. Khi luồng nhập kết thúc, dữ liệu trong input_stdin sẽ được chia thành mảng 
process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solveMeFirst(a, b) {
  // Hint: Type return a+b below   
  return a+b;
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = solveMeFirst(a, b);
    console.log(res);
}
