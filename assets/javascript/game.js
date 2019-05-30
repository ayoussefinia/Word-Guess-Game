
//array of superfoods one of which will be randomly selected
superFoods = ['avocado', 'broccoli', 'blueberries', 'spinach', 'salmon', 'turmeric', 'dark chocolate', 'chia seeds', 'kale'];

//global vars
guessesLeft = 8;
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
  userKey = event.key;
  foodArr = food.split('');

//if the user guesses correctly
    if(foodArr.indexOf(userKey)>=0 && foodArr.indexOf(userKey) != dashesArr.indexOf(userKey)) {
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
    } else if(foodArr.indexOf(userKey)>=0 && foodArr.indexOf(userKey) == dashesArr.indexOf(userKey)) {
      console.log("you already picked that letter");
    }else {
      console.log("incorrect guess");
    }

    console.log(guessesLeft);
    console.log(guesses);
    console.log(wins);
    
  });






console.log(food);
console.log(dashesArr);

