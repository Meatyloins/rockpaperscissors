const choices = ["rock", "paper", "scissors"];

  function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    return computerChoice;
  };