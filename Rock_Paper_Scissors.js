// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

code:
const rps = (p1, p2) => {
    if (p1 === p2) {
      return "Draw!";
    } else if (
      (p1 === "rock" && p2 === "scissors") ||
      (p1 === "scissors" && p2 === "paper") ||
      (p1 === "paper" && p2 === "rock")
    ) {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
  };
  console.log(rps("scissors", "paper")); // Output: "Player 1 won!"
  console.log(rps("scissors", "rock")); // Output: "Player 2 won!"
  console.log(rps("paper", "paper"));   // Output: "Draw!"
