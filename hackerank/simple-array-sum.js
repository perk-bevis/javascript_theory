Given an array of integers, find the sum of its elements.
for example, if the array ar =[1,2,3] ,1 + 2 + 3 =6, so return 6.
Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
simpleArraySum has the following parameter(s):

ar: an array of integers
Input Format

The first line contains an integer, n, denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.

Constraints
0 < n,ar[i] < 1000;
Output Format

Print the sum of the array's elements as a single integer.

Sample Input

6
1 2 3 4 10 11
Sample Output

31
dịch :
Cho một mảng các số nguyên, tìm tổng các phần tử của nó.
Ví dụ: nếu mảng AR =[1,2,3] ,1 + 2 + 3 =6, thì return 6.
Mô tả chức năng

Hoàn thành hàm simpleArraySum trong trình soạn thảo bên dưới. Nó phải trả về tổng của các phần tử mảng dưới dạng số nguyên.
simpleArraySum có (các) tham số sau:
ar: một mảng các số nguyên
Định dạng đầu vào

Dòng đầu tiên chứa một số nguyên,n , biểu thị kích thước của mảng.
Dòng thứ hai chứa các số nguyên được phân tách bằng không gian đại diện cho các phần tử của mảng.
Constraints
0 < n,ar[i] < 1000;
Output Format

In tổng các phần tử của mảng dưới dạng một số nguyên duy nhất.

Sample Input

6
1 2 3 4 10 11
Sample Output

31
code:
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}
