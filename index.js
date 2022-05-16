document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        let firstDice = randomDice();        
        let secondDice = randomDice();
        document.querySelector(".img1").setAttribute("src",firstDice)
        document.querySelector(".img2").setAttribute("src",secondDice)
        if (firstDice > secondDice)
        {
            document.querySelector("H1").innerHTML = "🚩 Player 1 Wins!"    
        }
        if (firstDice < secondDice)
        {
            document.querySelector("H1").innerHTML = "Player 2 Wins! 🚩"    
        }
        if (firstDice === secondDice)
        {
            document.querySelector("H1").innerHTML = "Its a Tie!"    
        }
    }
  };

  function randomDice(){
    let randomDiceOne = Math.floor((Math.random() * 6) + 1);
    randomDiceOne = "images/dice" + randomDiceOne + ".png";
    return randomDiceOne;
  }