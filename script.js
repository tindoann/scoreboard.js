// cache initial variables 
let count = 0;
let countForTeamB = 0;

// increment points for Team A 
let addOnePointForTeamA = () => {
  ++count
  let ptagCount = document.querySelector('p.score-team-a');
  ptagCount.textContent = count
}

// decreases points and checks if count is negative for Team A 
let subtractOnePointForTeamA = () => {
  if (count > 0) {
    --count
  } else {
    count = 0
  }

//gets the element in dom and places the count to browser
  let ptagCount = document.querySelector('p.score-team-a');
  ptagCount.textContent = count;
}

let addOnePointForTeamB = () => {
  ++countForTeamB
  let ptagCount = document.querySelector('p.score-team-b'); 
  ptagCount.textContent = countForTeamB; 
}

let subtractOnePointForTeamB = () => {
  if (countForTeamB > 0){
    --countForTeamB; 
  } else {
    countForTeamB = 0; 
  }
  let ptagCount = document.querySelector('p.score-team-b'); 
  ptagCount.textContent = countForTeamB; 
}


//update the teams name from user input 
let updateTeamAName = () => {
  let teamANameInput = document.querySelector('#new-team-a-name'); 
  let newName = teamANameInput.value; 
  let teamAName = document.querySelector('h2.team-a-name'); 
  teamAName.textContent = newName; 
}

let updateTeamBName = () => {
  let teamANameInput = document.querySelector('#new-team-b-name'); 
  let newName = teamANameInput.value; 
  let teamBName = document.querySelector('h2.team-b-name'); 
  teamBName.textContent = newName; 
}

// button region bind events 

const main = () => { 
  let ptagCount = document.querySelector('p.score-team-a'); 
  ptagCount.textContent = count
  let ptagForTeamB = document.querySelector('p.score-team-b'); 
  ptagForTeamB.textContent = countForTeamB; 
  let addOneButton = document.querySelector('button.add-for-team-a'); 
  addOneButton.addEventListener('click', addOnePointForTeamA);
  let subtractOneButton = document.querySelector('button.subtract-for-team-a'); 
  subtractOneButton.addEventListener('click', subtractOnePointForTeamA); 
  let addOneButtonForTeamB = document.querySelector('button.add-for-team-b'); 
  addOneButtonForTeamB.addEventListener('click', addOnePointForTeamB);
  let subtractOneButtonForTeamB = document.querySelector( 
    'button.subtract-for-team-b'
  )
    subtractOneButtonForTeamB.addEventListener(
    'click', 
    subtractOnePointForTeamB
    )
    let updateTeamANameButton = document.querySelector(
      'button.update-team-a-name'
  )
  updateTeamANameButton.addEventListener('click', updateTeamAName); 
  let updateTeamBNameButton = document.querySelector(
    'button.update-team-b-name'
  )
  updateTeamBNameButton.addEventListener('click', updateTeamBName); 
}

document.addEventListener('DOMContentLoaded', main); 