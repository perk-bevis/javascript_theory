A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled)
dịch:
Một đứa trẻ đang chơi với quả bóng trên tầng thứ n của một tòa nhà cao tầng. Đã biết chiều cao của tầng này so với mặt đất, h .

Anh ấy thả quả bóng ra ngoài cửa sổ. Bóng nảy (ví dụ), đến hai phần ba chiều cao của nó (độ nảy là 0,66).

Mẹ anh ấy nhìn ra ngoài cửa sổ cách mặt đất 1,5 mét.

Đã bao nhiêu lần người mẹ nhìn thấy quả bóng bay qua trước cửa sổ của mình (kể cả khi nó rơi và nảy lên?

Ba điều kiện phải được đáp ứng cho một thử nghiệm hợp lệ:
Thông số phao "h" tính bằng mét phải lớn hơn 0
Tham số float "bounce" phải lớn hơn 0 và nhỏ hơn 1
Tham số nổi "cửa sổ" phải nhỏ hơn h.
Nếu thỏa mãn cả 3 điều kiện trên thì trả về số nguyên dương, ngược lại trả về -1.

Ghi chú:
Bóng chỉ có thể được nhìn thấy nếu chiều cao của bóng bật lại lớn hơn nhiều so với thông số cửa sổ.

Ví dụ:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).

code:
function bouncingBall(h, bounce, window) {
  // Check for valid input conditions
  if (h <= 0 || !(0 < bounce && bounce < 1) || window >= h) {
    return -1;
  }

  // Initialize the count of passes in front of the window
  let passes = 0;

  while (h > window) {
    // The ball falls
    passes += 1;

    // Calculate the height of the bounce
    h *= bounce;

    // The ball bounces back to its original height or to a lower height
    // If it reaches the ground or goes below the window height, we stop the loop
    if (h > window) {
      passes += 1;
    }
  }

  return passes;
}

// Examples
console.log(bouncingBall(3, 0.66, 1.5)); // Output: 3
console.log(bouncingBall(3, 1, 1.5));    // Output: -1
