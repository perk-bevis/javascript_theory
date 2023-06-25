// khai bao bien
var fullName ='le quy doan';
var age = 26;



// goi ham thong bao
alert(fullName);
alert(age);


// ham console 
console.log('thu thuat hack');

// ham confirm
confirm('xac nhap ban du tuoi!');


// ham promt
prompt('xac nhap ban du tuoi!');


// thuc thi doan code sau khoang thoi gian dc an dinh
setTimeout(function() {
    alert('thong bao')
},6000)


// ham setinterval 
setInterval(function() {
    // alert('thong bao' + Math.random())
}, 1000)


// toan tu so hoc
var a= 1+2;
alert(a);


// toan tu so sanh
var a=1;
var a=2;
if(a<b){
    alert('dung');
}

// -----------------------------------------------------------
// toán tử ++ & -- việc 1 : + 1 cho a: a= a+1 ==> a=7
// việc 2 trả về a sau khi được +1
var a = 6
++a; //tiền tố trả thẳng gía trị còn hậu tố a++ thì trả về a coppy ex: a++ tăng 6 lên 1 nhưng trả về 6
// trường hợp trả về 
// var output= ++a;
// console.log('output: ', output );
console.log(a);
// -----------------------------------------------------
var a =6;
// việc 1 'a copy', a copy= 6
// vệc 2: trừ 1 của a , a = a-1=5
// việc 3 trả về a copy
var output= a--;
console.log('output: ', output );// output :6;
console.log('a: ', a) // a=7
// -----------------------------------------------------------



// toán tử nối chuỗi
var fullName = 'son'
var lastName = 'dang'

console.log(fullName + lastName);


// boolean
var nameSuccist = true;
console.log(nameSuccist); 
// \\\\\\\\\\-----------------------
var a=1
var b=2
var nameSuccist = a<b ;
console.log(nameSuccist); 
/**
 * Truthy và Falsy là gì?

Truthy - to bool is true
Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.

Các giá trị 1, ['BMW'], { name: 'Miu' } và 'hi' được đề cập trong ví dụ dưới đây là Truthy vì khi chuyển sang Boolean ta nhận được giá trị true.

Ví dụ:

console.log(Boolean(1)) // true
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Miu' })) // true

console.log(!!'hi') // true
!! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành "khẳng định". Trong Javascript thì đây là một "tip" để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.

Ví dụ:

console.log(!!1) // true
console.log(!!'f8') // true
console.log(!!['Mercedes']) // true
Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.

Falsy - to bool is false
Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.

Trong Javascript có 6 giá trị sau được coi là Falsy:

false
0 (số không)
'' or "" (chuỗi rỗng)
null
undefined
NaN
Ví dụ:

console.log(!!false) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!NaN) // false
Chú ý!
Nội dung đã đề cập phía trên đã đầy đủ khi nói về Truthy và Falsy trong Javascript. Tuy nhiên mình vẫn cần nhấn mạnh lại với các bạn rằng:

Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:

'0' (một chuỗi chứa số không)
' ' (một chuỗi chứa dấu cách)
'false' (một chuỗi chứa từ khóa false)
[] (một array trống)
{} (một object trống)
function(){} (một hàm "trống")
Một số người chuyển từ ngôn ngữ khác sang rất có thể sẽ bị nhầm [] (mảng "rỗng") là falsy, bởi vì trong ngôn ngữ họ đã học trước đó [] là falsy.

Với những người hiểu nhầm [] là falsy sẽ gặp trường hợp khó hiểu sau:

Ví dụ:

var cars = [] // Dù là mảng "rỗng" vẫn là truthy

if (!cars) {
    // Họ sẽ thắc mắc: "Tại sao lại không lọt vào đây?"
}
Vì [] là truthy nên !cars sẽ trả về false. Câu lệnh if sẽ nhận được kết quả của mệnh đề so sánh là false, vì vậy đoạn mã trong if trên sẽ không được lọt vào.

Ngoại lệ? - document.all
Trong Javascript (phía trình duyệt) sẽ có sẵn một đối tượng document, và khi bạn thử !!document.all sẽ trả về false. Chẳng lẽ document.all cũng là falsy hay sao?

Bản thân mình cũng thắc mắc điều này nên mình đã search Google "Why document.all is falsy?" và mình đã tìm được câu trả lời tại đây.

Tóm tắt câu trả lời:

document.all là một ngoại lệ chính thức duy nhất theo đặc tả ECMA (phiên bản 5). Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là true. Tuy nhiên, document.all là một ngoại lệ.

Cụ thể như sau:

document.all chuyển sang boolean sẽ là false
document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
Khi typeof document.all sẽ trả về "undefined"
ECMA là đặc tả chi tiết kỹ thuật mà các ngôn ngữ theo đặc tả này phải tuân theo. Javascript là một ngôn ngữ tuân thủ đặc tả kỹ thuật ECMA.
 */


// hàm
function showDialog() {
    alert("dinh nghia ham"); //
}
showDialog();


// tham so trong ham -khi dinh nghia ra goi la tham so
function writeLog(message) {
    console.log(message); 
}
showDialog('text message');


// đối tượng arguments
//param là một biến chứa từng đối số được truyền cho hàm.


function writeLog(){
    console.log(arguments);
}
writeLog();
// for
function writeLog(){
    for(var param of arguments){
        cosole.log(param)
    }
}
writeLog('log_1', 'log 2', 'log_3');


// trường hợp dùng for in 3 giá trị log_1,log_2, log_3 trên cùng 1 dòng
function writeLog(){
    var myString = '';// gán giá trị là chuỗi rỗng có ba khoảng trắng.
    // for - of lặp qua các tham số và ghi chúng vào console.
    for(var param of arguments){
        myString += '$(param) -'
    }
    cosole.log(myString);
}
writeLog('log_1', 'log 2', 'log_3');


// =========================================
// các loại hàm
// hàm 1: declacation function
function writeLog(){
    
}
// hàm 2 expresstion function
var showMessage2= function(){

}
setimeout (function(){

})

var myObiject= {
    myFunction: function(){

    }
}


// độ dài chuỗi length
var myString= "toi da di hoc";
console.log(myString.length);
// find index tìm đc vị trí của 1 kí tự nằm trong 1 chuỗi
var myString= "toi da di hoc";
console.log(myString.indexOf("da"));
// 2 ... tim vi tri va tra ve vi tri cuoi cung trong chuoi
var myString= "hoc js tai f8! js";
console.log(myString.lastIndexOf("js",));
//cut string
var myString= "hoc js tai f8";
console.log(myString.slice(4, 6));
// replace ghi đè
var myString= "hoc js tai f8";
console.log(myString.replace('js','jvs'));
// ghi đè tất cả chữ js trong chuỗi
var myString= "hoc js tai js js f8";
console.log(myString.replace(/js/g,'jvs'));
// convert to upper case chuyển đổi tất cả chữ thành in hoa
var myString= "hoc js tai f8";
console.log(myString.toUpperCase());
// convert to lower case chuyển đổi tất cả chữ thành in thường
var myString= "hoc js tai f8";
console.log(myString.toLowerCase());
// trim loại bỏ khoảng trắng ở hai đầu
var myString= "   hoc js tai f8    ";
console.log(myString.trim());
// split cắt 1 chuỗi thành 1 array
var languages ='Javascript, PHP, RUBY';
console.log(languages.split,', ');
// get a character by index tra ve ki tu
const myString2 ='son dang';
console.log(myString2.charAt(0));


/**
 * làm việc với số
 * 
Phương thức	                Vai trò
Number.isFinite()	        Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger()	        Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat()	        Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt()	        Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
 */
// tạo giá trị với number
var result = 20 /'ABC';
console.log(result);// trả về NaN kiểu số k hợp lệ
// kiểm tra giá trị NaN
var result = 20 /'ABC';
console.log(isNaN(result));


/**
 * to string
 */
var age =18;
var PI=3.14;
console.log(age.toString());
/**
 * to fixed
 */
var PI=3.14;
console.log(PI.toFixed());



/**
 * mảng array -------------------//// 
 **/ 
var language = [
    'javascript',
    'PHP',
    'Ruby',
];
console.log(language);
// kiểm tra biến có phải là array ko
console.log(Array.isArray(language));


/**
 * truy xuất độ dài của mảng
 */
var language = [
    'javascript',
    'PHP',
    'Ruby',
];
console.log(language.length)
// lấy phần tử the index
var language = [
    'javascript',
    'PHP',
    'Ruby',
];
console.log(language[0]);


/**
 * +===================================
 */
// làm việc vs array
 
var language = [
    'javascript',
    'PHP',
    'Ruby',
];
cosole.log(language.toString) // chuyển kiểu dữ liệu array sang chuỗi
// join sử dụng để kết hợp các phần tử của một mảng thành một chuỗi
cosole.log(language.join(', '))
// pop sẽ xóa đi phần tử ở cuối mảng và nó sẽ trả lại chính phần tử mà nó đã xóa
console.log(language.pop());
console.log(language);
// push thêm 1 phần tử vào cuối mảng
console.log(language.push('Dart'));
console.log(language);
// shift sẽ xóa đi phần tử ở đầu mảng và nó sẽ trả lại chính phần tử mà nó đã xóa
console.log(language.shift());
console.log(language);
// unshift thêm 1 phần tử vào đầu mảng
console.log(language.unshift('Dart'));
console.log(language);
/**
 splicing xoas cắt chèn phần tử mới vào mảng """"""""
 * 
*/
// xóa
language.splice(1 , 1)
console.log(language);
// chèn
language.splice(1 , 0, 'Dart')
console.log(language);
/**
 * concat hàm giúp nối đc array
 */
var language = [
    'javascript',
    'PHP',
    'Ruby',
];
var language2 = [
    'Dart',
    'Ruby',
]
console.log(language.concat(language2));
/**
 * slicing dùng để cắt 1 vài element của mảng hay toàn bộ
 */
var language = [
    'javascript',
    'PHP',
    'Ruby',
];
console.log(language.slice(1, 2));



/**
 * object 
 */
var myInfor = {
    name: 'doan le',
    age: 18,
    adress: 'ha noi, vn'
};
myInfor.email = 'doanlq2k4@gmail.com';
// myInfor['my-email'] = 'doanlq2k4@gmail.com';
console.log(myInfor);
1//c1 cách lấy valude ra ngoài
console.log(myInfor.name);
2// c2
console.log(myInfor['adress']);
/////
var myInfor = {
    name: 'doan le',
    age: 18,
    adress: 'ha noi, vn'
};
var myKey = 'adress'
console.log(myInfor[mykey]);// lấy ra chữ ha noi vn
///////
var emailKey = 'email';

var myInfor = {
    name: 'doan le',
    age: 18,
    adress: 'ha noi, vn',
    [emailKey]: 'doanlq2k4@gmail.com', //in ra dòng email ko phải emailkey
};
// cách xóa cặp keyvalude r=trong 1 object 
delete myInfor.age;

console.log(myInfor);
// value là 1 funtion
var myInfor = {
    name: 'doan le',
    age: 18,
    adress: 'ha noi, vn',
    [emailKey]: 'doanlq2k4@gmail.com',
    getName: function(){
        return this.name;
    }
};
console.log(myInfor.getName());


// Object constructor -- xay dựng đối tượng
function User(firstName, lastName, avatar) {
    // this :mô tả thuộc tính và phương thức sẽ có cho đối tượng
    this.firstName = firstName;// 
    this.lastName = lastName;
    this.avatar = avatar;
    //phương thức --
    this.getName = function () {
     return `${this.firstName} ${this.lastName}`;
    }
 }
 var author = new User('doan', 'le', 'avatar');
 var user = new User('phú', 'nguyễn', 'avatar');
 
//  author.title = 'hoc lap trinh tai f8'
//  user.comment = 'bài này khó quá ad 🤪'
 
 console.log(author);
 console.log(user);


// Object prototype -Basic làm hàm nguyên mẫu để tajo nên 1 đối tượng
function User(firstName, lastName, avatar) {
    // mô tả thuộc tính và phương thức sẽ có cho đối tượng
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    //phương thức --
    this.getName = function () {
     return `${this.firstName} ${this.lastName}`;
    }
}
// prototype giúp thêm đc 1 thuộc tính ở bên ngoài hàm tạo
User.prototype.className = 'f8';

var user = new User('doan', 'le', 'avatar');
var user2 = new User('phú', 'nguyễn', 'avatar');
 
console.log(user.className);
console.log(user2.getClassName());
// đối tượng date
var date = new Date();

// console.log(date);
//lấy ra năm
console.log(date.getFullYear());
/////
var date = new Date();

var year =date.getFullYear();
var month =date.getMonth() +1;
var day = date.getDate();
console.log(`${day} ${month} ${year}`);


/**
 * math object
 * - math.PI
 * - math.round()
 * - math.abs()
 * - math.ceil()
 * - math.floor()
 * - math.random()
 * - max.min()
 * - max.max()
 */
// trả về số pi hoàn chỉnh
console.log(math.PI)
// làm tròn số 
console.log(math.round)
// trả về giá trị tuyệt đối
console.log(math.abs());
//làm tròn trên 
console.log(math.ceil())
// làm tròn dưới
console.log(math.floor())
// trả về số thập phân nhỏ hơn 1
console.log(math.random())
// tỉ lệ ngẫu nhiên 
var random = math.floor(math.random() * 5)

var bonus = [
    '10 coins',
    '20 coins',
    '30 coins',
    '40 coins',
    '50 coins',
];
console.log(bonus[random])
// =====tỉ lệ random thấp ======
var random = math.floor(math.random() * 5)

if(random < 50){
    console.log('cường hóa thành công!')
}
// trả về số nhỏ nhất
console.log(math.min(-100 ,1, 80, 40)) // trả về -100
//trả về số lớn nhất 
console.log(math.max(-100 ,1, 90, 50)) // trả về 90


/**
 * lệnh rẽ nhánh toán tử 3 ngôi
 */
// /// cần so sánh đúng  sai -- số lượng case < 3 case sd if else
var date = 2;
if(date === 2){
    console.log('hôm nay là thứ 2');
}else if(date === 3){
    console.log('hôm nay là thứ 3');
}else if(date === 4){
    console.log('hôm nay là thứ 4');
} else {
    console.log('không biết')
}


// switch case
// /dc cho trc gia tri (2 -8) >= 3 case
var date = 2;
switch(date) {
    case 2:
        console.log('hom nay la thu 2');
        break;
    case 3:
        console.log('hom nay la thu 3');
        break;
    case 4:
        console.log('hom nay la thu 4');
        break;
    case 5:
        console.log('hom nay la thu 5');
        break;
    default:
        console.log('ko biet')
}

// toán tử 3 ngôi

var course = {
    name: 'javascript',
    coin: 250,
}

// if(course.coin > 0){
//     console.log(`${course.coin} Coin`)
// } else {
//     console.log('miễn phí')
// }
var result = course.coin > 0 ? `${course.coin} Coin` : 'miễn phí';
console.log(result);

/**
 * vòng lặp 
 * 1, for: - lặp với điều kiện đúng
 * 2, for/in - lặp qua key của đối tượng 
 * 3, for/of - lặp qua value của đối tượng
 * 4, while - lặp khi điều kiện đúng 
 * 5, do/while - lặp ít nhất 1 lần sau đó
 * lặp khi điều kiện đúng
 */
for (var i=1; i <= 1000; i++){
    // code
}

/*
Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
Hàm này sẽ trả về một mảng gồm length phần tử,
các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 
số ngẫu nhiên trong khoảng min - max.
*/ 
function getRandNumbers(min,max,length) {
    var arr = []
    for (var i=0; i<length; i++) {
        arr.push(Math.random() * (max-min) + min)
    }
    return arr
}


// trường hợp 2
var myArray = [
    'javascript',
    'PHP',
    'java',
    'dart'
]
var arrayLength = myArray.length;
for(var i =0;i<arrayLength;i++){
    // console.log(i);
    console.log(myArray[i]);
}



// for/in
/* For ... in dùng để duyệt qua key của Object và duyệt các
 index trong 1 chuỗi*/
var myInfor = {
    name : 'son dang',
    age: 18,
    address: 'ha noi, vn'
}

for(var homework in myInfor){
    // console.log(homework);
    console.log(myInfor[homework]);
}

// for/of
/* 1: sử dụng trong trường hợp muốn lấy ra những phần tử của mảng 
lấy ra từng chữ cái của 1 chuỗi
2: For ... of dùng để duyệt qua các phần tử của mảng và duyệt 
các phần tử trong 1 chuỗi*/
var language = [
    'language',
    'data',
    'string'
];

for (var value of language){
    console.log(value)
}
// c2 lấy ra object
var myInfor = {
    name: 'doan',
    age:18,
};

//console.log(Object.keys(myInfor));//trả về 1 mảng các key
/** 
 *c1 : for (var value of Object.keys(myInfor)){
            console.log(myInfor[value]);
        }
*/
/**
 *  Object.keys đơn giản , keys() là 1 phương thức của
 *  đối tượng Object dùng để trả về mảng các key của Object đó
 */
for (var value of Object.value(myInfor)){
    console.log(value);
}


// while
var i = 1;

while(i <= 1000){
    console.log(i)
    i++;
}
// th1
var myArr = [
    'javascript',
    'object',
]

var i = 1;

while(i <= myArr.length){
    console.log(myArr[i])
    i++;
}

// vòng lặp do...while
var i = 0;
var isSucces = false;

do{
   i++;
   console.log('nạp thẻ lần'+i);
   if(true){
    isSucces = true;
   }
} while(!isSucces && i < 3);
// vòng lặp lồng nhau 
var myArray = [
    [1,2],//0
    [3,4],//1
    [5,6],//2
]

for(var i =0;i< myArray.length;i++){
    for(var j =0;j< myArray[i].length;j++){
        console.log(myArray[i],[j]);
    }
}
// ==============ĐỆ QUY================

var array = ['a', 'b', 'c', 'd', 'a', 'a', 'c']

console.log([...(new Set(array))]);

// +++++++++++++++hàm đệ quy+++++++++++++++
// 1: xác định điểm dừng
// 2: logic handle ==> tạo ra điểm dừng
function deQuy(){
    deQuy();
}
deQuy();
// vd:
function countDown(number){
    if(number > 0){
        console.log(number);
        return countDown(number -1);
    }
    return number;
}
countDown(10);
// vd1
function loop( start, end, cb){
    if(start <= end){
        cb(start);
        return loop( start+1, end, cb)
    }
}
var array = ['javascript', 'PHP', 'Ruby'];

loop(0, array.length-1, function(index){
    console.log(array[index]);
})
// vd2: tính giai thừa cách 1: vòng lặp
function giaiThua(number){
    var output =1;
    for(var i =number; i>0 ;i--){
        output=output*i;
    }
    return output;
}

console.log(giaiThua(6));
// vd2: tính giai thừa cách 2: đệ quy
function giaiThua(number){
    if(number > 0){
        return number * giaiThua(number-1);
    }
    return 1;
}

console.log(giaiThua(6));


// ===============MẢNG 2===============
/**
 * array
 * forEach() duyệt qua từng phần tử của mảng
 * every() kiểm tra  tất cả p tử thỏa mãn điều kiệu nào đó
 * some() kiểm tra xem phần tử có thoả mãn điều kiện không nếu có 1 ptử thỏa mãn thì trả về true 
 * fnd() tìm kiếm mong muốn kết quả trả về là 1 phần tử
 * filter() tìm kiếm và trả về tất cả phần tử thỏa mãn
 * map() muốn thay đổi 1 element trong 1 array
 * reduce()
 */
// forEach()
var courses = [
    {
        id:1,
        name: 'javascript',
        coin:20,
    },

    {
        id:2,
        name: 'HTML, CSS',
        coin:30,
    },

    {
        id:3,
        name: 'JSVALUE',
        coin:70,
    },

    {
        id:4,
        name: 'Ruby',
        coin:50,
    },

    {
        id:5,
        name: 'reactjs',
        coin:90,
    }
];
courses.forEach(function(course, index){
    console.log(index,course);
});
// every() 
var courses = [
    {
        id:1,
        name: 'javascript',
        coin:20,
    },

    {
        id:2,
        name: 'HTML, CSS',
        coin:30,
    },

    {
        id:3,
        name: 'JSVALUE',
        coin:70,
    },

    {
        id:4,
        name: 'Ruby',
        coin:50,
    },

    {
        id:5,
        name: 'reactjs',
        coin:90,
    }
];
var isFree = courses.every(function(course, index){
    console.log(index)
    return course.coin === 0;
});
console.log(isFree);
// some()
var courses = [
    {
        id:1,
        name: 'javascript',
        coin:0,
    },

    {
        id:2,
        name: 'HTML, CSS',
        coin:20,
    },

    {
        id:3,
        name: 'JSVALUE',
        coin:0,
    },

    {
        id:4,
        name: 'Ruby',
        coin:0,
    },

    {
        id:5,
        name: 'reactjs',
        coin:90,
    }
];
var isFree = courses.some(function(course, index){
    return course.coin === 0;
});
console.log(isFree);
// fnd()
var courses = [
    {
        id:1,
        name: 'javascript',
        coin:0,
    },

    {
        id:2,
        name: 'HTML, CSS',
        coin:20,
    },

    {
        id:3,
        name: 'JSVALUE',
        coin:0,
    },

    {
        id:4,
        name: 'Ruby',
        coin:0,
    },

    {
        id:5,
        name: 'reactjs',
        coin:90,
    }
];
var course = courses.find(function(course, index){
    return course.name === 'Ruby';
});
console.log(course);
// filter()
var courses = [
    {
        id:1,
        name: 'javascript',
        coin:0,
    },

    {
        id:2,
        name: 'HTML, CSS',
        coin:20,
    },

    {
        id:3,
        name: 'JSVALUE',
        coin:0,
    },

    {
        id:4,
        name: 'Ruby',
        coin:0,
    },

    {
        id:5,
        name: 'reactjs',
        coin:90,
    },
    {
        id:6,
        name: 'Ruby',
        coin:10,
    },
];
var listCourses = courses.filter(function(course, index){
    return course.name === 'Ruby';
});
console.log(listCourses);
// map()
var courses = [
    {
        id:1,
        name: 'javascript',
        coin:0,
    },

    {
        id:2,
        name: 'HTML, CSS',
        coin:20,
    },

    {
        id:3,
        name: 'JSVALUE',
        coin:0,
    },

    {
        id:4,
        name: 'Ruby',
        coin:0,
    },

    {
        id:5,
        name: 'reactjs',
        coin:90,
    },
    {
        id:6,
        name: 'Ruby',
        coin:10,
    },
    {
        id: 7,
        name: 'Ruby',
        coin:0,
    },
];
function courseHandler(course, index){
    // console.log(course);
    return {
        id: course.id,
        name: `khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `gia ${course.coin}`,
        index: index,
        originArray: courses,
    }
}
var newCourses = courses.map(courseHandler)
console.log(newCourses);
// tách ra chỉ lấy tên khóa học
var courses = [
    {
        id:1,
        name: 'javascript',
        coin:0,
    },

    {
        id:2,
        name: 'HTML, CSS',
        coin:20,
    },

    {
        id:3,
        name: 'JSVALUE',
        coin:0,
    },

    {
        id:4,
        name: 'Ruby',
        coin:0,
    },

    {
        id:5,
        name: 'reactjs',
        coin:90,
    },
    {
        id:6,
        name: 'Ruby',
        coin:10,
    },
    {
        id: 7,
        name: 'Ruby',
        coin:0,
    },
];
function courseHandler(course, index){
    // console.log(course);
    return course.name;
}
var newCourses = courses.map(courseHandler)
console.log(newCourses);
// vd2
function courseHandler(course, index){
    // console.log(course);
    return `<h2> ${course.name}</h2>`;
}
var newCourses = courses.map(courseHandler)
// ++++join tạo chuỗi string
console.log(newCourses.join(''));


// reduce()
// được sử dụng để thực hiện một phép toán tích lũy (accumulation)
// trên các phần tử của một mảng, để từ đó tạo ra một giá trị duy nhất.
var courses = [
    {
        id:1,
        name: 'javascript',
        coin:100,
    },

    {
        id:2,
        name: 'HTML, CSS',
        coin:200,
    },

    {
        id:3,
        name: 'JSVALUE',
        coin:0,
    },

    {
        id:4,
        name: 'Ruby',
        coin:0,
    },

    {
        id:5,
        name: 'reactjs',
        coin:90,
    },
    {
        id:6,
        name: 'Ruby',
        coin:10,
    },
    {
        id: 7,
        name: 'Ruby',
        coin:0,
    },
];
  //=====================================================\\    
    // biến lưu trữ
var totalCoin = 0;
    //lặp qua các phần tử
for(var course of courses){
    // thực hiện việc lưu trữ
    totalCoin += course.coin;
}

console.log(totalCoin);


  //=====================================================\\    
//====================sử dụng reduce()=====================\\
var totalCoin = courses.reduce(function coinHandler(accumulator, currentValue){
    return accumulator+currentValue.coin;
}, 0);
console.log(totalCoin);
/////////////////////////////////////////////////
//flat làm phẳng mảng từ depth array - "mảng sâu"
var depthArray = [1,2 ,[3,4], 5,6,[7,8,9]]

var flatArray = depthArray.reduce(function(outputArray,depthimtern){
    return outputArray.concat(depthimtern);
}, [])
console.log(flatArray);


// bai tap
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  function calculateRating(arr) { 
    var chrisNolan = arr.filter(function (director) { 
    return director.Director === "Christopher Nolan"; }); 
    var imDB = chrisNolan.reduce(function (a, b) { 
        return a + parseFloat(b.imdbRating); }, 0); 
        return imDB / chrisNolan.length; 
    }
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675


  // logic reduce
  Array.prototype.reduce2 = function (callback, results){
    let i = 0; 
    if (arguments.length < 2){
        i = 1;
        results = this[0];
    };
    
    for ( ; i < this.length; i++){
        //results: giá trị tích lũy từ các lần gọi
        //+++ trước của hàm gọi lại.
        //this[i]: phần tử hiện tại của mảng.
        //i: chỉ mục của phần tử hiện tại.
        //this: mảng gốc.

        results = callback(results, this [i], i, this);
    };
    return results;
};
//------------------------------------//
const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce2((total, number) => {
    return total + number;
});

console.log(result);
//String/Array includes() method
var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];

function checkCar(cars) {
   return cars.includes('Mercedes', 2);
}

console.log(checkCar(cars)); // Output: ? = false


/** callback
 * 1: hàm
 * 2: được truyền qua đối số
 *  */
function myFunction (param){
    if(typeof param === 'function'){
        param('hoc lap trinh');
    }
}

function myCallback (value){
    console.log('value: ', value)
}

myFunction(myCallback);
// bt callback 
function sumCb(a, b) {
    return a+b;
}
function subCb (a,b){
 return a-b;
}
function multiCb (a,b){
 return a*b;
}
function divCb(a,b){
 return a/b;
}
function caculate(a, b, cb) {
 return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3


// ==========================================/\\\\\
/**
 * callback p2
 * là hàm
 * truyền qua đối số 
 * đc gọi lại (trong hàm nhận đối số)
 */
Array.prototype.map2 = function(callBack){
    var output = [], arrayLength = this.length;

    for(var i =0;i< arrayLength; ++i){
        var result = callBack(this[i], i);
        output.push(result)
    }
    return output;
}

var courses =[
    'javascript',
    'ruby',
    'php'
]
var htmls =courses.map2(function(course,index){
    return `<h2> ${course} </h2>`;
});
console.log(htmls);
// var htmls =courses.map(function (course){
//     return `<h2> ${course} </h2>`;
// });
// console.log(htmls.join(', '));

//foreach ,reduce, find ,filter ,every;

