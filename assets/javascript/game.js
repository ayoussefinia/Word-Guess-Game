
//array of superfoods one of which will be randomly selected
superFoods = ['avocado', 'broccoli', 'blueberries', 'spinach', 'salmon', 'turmeric', 'dark chocolate', 'chia seeds', 'kale'];

//global vars
guessesLeft = 10;
guesses =0;
dashesArr =[];
wins=0;

//initialzie an array of underscores that is equal to the  length of the randomly seleccted super food and has spaces when there is no letter at the index
food = superFoods[Math.floor(Math.random() * superFoods.length)];
for (i=0; i<food.length; i++) {
  dashesArr.push('_');
  if(food[i] == ' '){
    dashesArr[i] = ' ';
  }
}

//did not include in the for loop above so that it would include spaces
for (i=0; i<food.length; i++) {
document.getElementById('word-header').innerHTML += `<span class="word-character">${dashesArr[i]}</span>`;
}

//event lister for key up 
document.addEventListener('keyup', function(event) {
  console.log(event.key);
  userKey = event.key;
  foodArr = food.split('');

//checks if you are allowed to play
if(guessesLeft > 0 && dashesArr.indexOf('_') >= 0) {

  //if the user guesses correctly
      if(foodArr.indexOf(userKey)>=0 && foodArr.indexOf(userKey) != dashesArr.indexOf(userKey)) {
        document.getElementById('correct').textContent = "GOOD GUESS";
        //loops through both arrays replaces underscores with correct guess, will replace multiple letters if they are the same 
        for(i=0; i<foodArr.length;i++) {
          if(foodArr[i] ==  event.key) {
            console.log("match found at:" + i);
            dashesArr[i] = foodArr[i];
          } 
        }
        console.log("foodarr: " +foodArr);
        console.log(dashesArr);
        //clears the previous html characters
        document.getElementById('word-header').innerHTML = ``;
        
        //resets the html characters to include the last guess
        for (i=0; i<food.length; i++) { 
          document.getElementById('word-header').innerHTML += `<span class="word-character">${dashesArr[i]}</span>`;
          }
        // if the user is forgetful and guesses the same letter

        guesses = guesses + 1;
        guessesLeft -= 1;

      } else if(foodArr.indexOf(userKey)>=0 && foodArr.indexOf(userKey) == dashesArr.indexOf(userKey)) {
        document.getElementById('correct').textContent = "YOU ALREADY GUESSED THAT";
        console.log("you already picked that letter");
      }else {
        console.log("incorrect guess");
        document.getElementById('correct').textContent = "WRONG GUESS";
        guesses = guesses + 1;
        guessesLeft -= 1;
      }

    
  }

  if(guessesLeft == 0) {
    console.log("you loose :(");
    guesses = 0;
    guessesLeft = 10;
    dashesArr=[];
    // document.querySelector('.default').style.display = 'none';
    // document.querySelector('.looser').style.display = 'block';
    // document.querySelector('.winner').style.display = 'none';
    food = food.toUpperCase();
    document.getElementById('correct').textContent = `YOU LOOSE the correct word was: ${food} press any key to play again`;
    //comment
    


    //repeat code will refactor
    document.getElementById('word-header').innerHTML = ``;
    food = superFoods[Math.floor(Math.random() * superFoods.length)];
    for (i=0; i<food.length; i++) {
      dashesArr.push('_');
        if(food[i] == ' '){
          dashesArr[i] = ' ';
        }
    }
    console.log(food);
    console.log(dashesArr);

    //did not include in the for loop above so that it would include spaces
    for (i=0; i<food.length; i++) {
        document.getElementById('word-header').innerHTML += `<span class="word-character">${dashesArr[i]}</span>`;
    }
    
  }

  
  if(dashesArr.indexOf('_') < 0) {
        console.log("YOU WIN!!!");
        guesses = 0;
        guessesLeft = 10;
        wins = wins +1;
        dashesArr = [];

        //winning message

        document.getElementById('correct').textContent = 'YOUWIN!!! :) Press Any Key to Play Again';

      // repeat code will refactor in the future
      document.getElementById('word-header').innerHTML = ``;
      food = superFoods[Math.floor(Math.random() * superFoods.length)];
      for (i=0; i<food.length; i++) {
        dashesArr.push('_');
          if(food[i] == ' '){
            dashesArr[i] = ' ';
          }
      }
      console.log(food);
      console.log(dashesArr);
    //did not include in the for loop above so that it would include spaces
      for (i=0; i<food.length; i++) {
          document.getElementById('word-header').innerHTML += `<span class="word-character">${dashesArr[i]}</span>`;
      }

  }

  document.getElementById('wins').innerText = wins;
  document.getElementById('guesses-left').innerText = guessesLeft;
  document.getElementById('guesses').innerText = guesses;
  console.log(guessesLeft);
  console.log(guesses);
  console.log(wins);

  });






console.log(food);
console.log(dashesArr);

