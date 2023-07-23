## Valid Braces
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

dịch:
Viết một hàm nhận vào một chuỗi các dấu ngoặc nhọn và xác định xem thứ tự của các dấu ngoặc nhọn
  có hợp lệ hay không. Nó sẽ trả về true nếu chuỗi hợp lệ và false nếu nó không hợp lệ.

Bài Kata này tương tự như Bài Kata Dấu ngoặc đơn hợp lệ , nhưng giới thiệu các ký tự mới:
dấu ngoặc nhọn []và dấu ngoặc nhọn {}. Cảm ơn @arnedagvì ý tưởng!

Tất cả các chuỗi đầu vào sẽ không trống và sẽ chỉ bao gồm dấu ngoặc đơn, dấu ngoặc vuông và dấu ngoặc nhọn: ()[]{}.

Những gì được coi là hợp lệ?
Một chuỗi mắc cài được coi là hợp lệ nếu tất cả các mắc cài được ghép với đúng mắc cài.

ví dụ
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

code :
function validBraces(braces) {
  const stack = [];
  const matchingBraces = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < braces.length; i++) {
    const currentBrace = braces[i];
    
    // If it's an opening brace, push it onto the stack.
    if (currentBrace === '(' || currentBrace === '[' || currentBrace === '{') {
      stack.push(currentBrace);
    } else {
      // It's a closing brace, check if it matches the top of the stack.
      const matchingOpeningBrace = matchingBraces[currentBrace];
      const lastOpeningBrace = stack.pop();
      
      // If the stack is empty or the lastOpeningBrace doesn't match the current closing brace, it's invalid.
      if (!lastOpeningBrace || lastOpeningBrace !== matchingOpeningBrace) {
        return false;
      }
    }
  }
  
  // If the stack is not empty, there are unmatched opening braces, so it's invalid.
  return stack.length === 0;
}

// Test cases
console.log(validBraces("(){}[]"));   // Output: true
console.log(validBraces("([{}])"));   // Output: true
console.log(validBraces("(}"));       // Output: false
console.log(validBraces("[(])"));     // Output: false
console.log(validBraces("[({})](]")); // Output: false
