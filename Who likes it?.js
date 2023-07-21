You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

dịch:
Bạn có thể biết hệ thống "thích" từ Facebook và các trang khác. Mọi người có thể "thích" các bài đăng trên blog, ảnh hoặc các mục khác. Chúng tôi muốn tạo văn bản sẽ được hiển thị bên cạnh một mục như vậy.

Thực hiện chức năng lấy một mảng chứa tên của những người thích một mặt hàng. Nó phải trả về văn bản hiển thị như trong ví dụ:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Lưu ý: Đối với 4 tên trở lên, số lượng "and 2 others"chỉ đơn giản là tăng lên.

code:
function likes(names) {
  const numOfLikes = names.length;

  if (numOfLikes === 0) {
    return "no one likes this";
  } else if (numOfLikes === 1) {
    return names[0] + " likes this";
  } else if (numOfLikes === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (numOfLikes === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return names[0] + ", " + names[1] + " and " + (numOfLikes - 2) + " others like this";
  }
}

console.log(likes([]));                                 // "no one likes this"
console.log(likes(["Peter"]));                           // "Peter likes this"
console.log(likes(["Jacob", "Alex"]));                   // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"]));             // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));    // "Alex, Jacob and 2 others like this"
c2:
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
