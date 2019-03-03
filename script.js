//cache the variables
let count = 0;
let countForTeamB = 0;

//increment the count for Team One 
let addOnePointForTeamA() => {
  ++count
  let ptagCount = document.querySelector('p.score-team-a');
  ptagCount.textContent = count;
}

//stop the counter from being negative
let subtractOnePointForTeamA = () => {
  if (count > 0) {
    --count
  } else {
    count = 0;
  }

//gets the dom and replace with current count
let ptagCount = document.querySelector('p.score-team-a');
ptagCount.textcontent = count;
}

//increment the count for Team Two 
let addOnePointForTeamB = () => {
  ++countForTeamB
  let ptagCount = document.querySelector('p.score-team-a'); 
  ptagCount.textContent = countForTeamB; 
}

let subtractOnePointForTeamB = () => {
  if (countForTeamB > 0){
    --countForTeamB; 
  } else {
    countForTeamB = 0; 
  }
  let ptagCount = document.querySelector('p.score-team-b')
  ptagCount.textContent = countForTeamB
}

let updateTeamBName = () => {
  let teamANameInput = document.querySelector('new-team-a-name'); 
  let newName = teamANameInput.nodeValue; 
  let teamAName = document.querySelector('h2.team-a-name'); 
  teamAName.textContent = newName
}

const main = () => { 
  let ptagCount = document.querySelector('p.score-team-a'); 
  ptagCount.textContent = count; 
  let ptagForTeamB = document.querySelector('button.add-for-team-a'); 
  addOneButton.addEventListener('click', addOnePointForTeamA); 
  let addOneButtonForTeamB = document.querySelector('button.subtract-for-team-a')
  subtractOneButton.addEventListener('click', substractOnePointForTeamOne); 
  let addOneButtonForTeamB = document.querySelector('button.add-for-team-b'); 
  addOneButtonForTeamB.addEventListener('click, addOnePointForTeamB'); 
  let subtractOneButtonForTeamB = document.querySelector(
    'button.subtract-for-team-B'
  )
    subtractOneButtonForTeamB.addEventListener(
    'click', subtractOnePointForTeamB)
  let updateTeamOneNameButton = document.querySelector(
    'button.update-team-a-name'
  )
  updateTeamANamebutton.addEventListener('click', updateTeamAName); 
  let updateTeamTwoNameButton = document.querySelector(
    'button.update-team-b-name'
  )
  updateTeamBNameButton = document.querySelector('click', updateTeamBName); 
}

document.addEventListener('DOMContentLoaded', main); 