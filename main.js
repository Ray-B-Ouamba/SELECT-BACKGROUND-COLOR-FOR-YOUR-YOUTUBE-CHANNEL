document.getElementById('green').onclick = partyGreen
document.getElementById('yellow').onclick = partyYellow
document.getElementById('red').onclick = partyRed
document.getElementById('blue').onclick = partyBlue
document.getElementById('pink').onclick = partyPink
document.getElementById('grey').onclick = partyGrey
document.getElementById('black').onclick = partyBlack
document.getElementById('orange').onclick = partyOrange



function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgb(0, 107, 48)' 
  document.querySelector('body').style.color = 'white'
}

function partyYellow() {
  document.querySelector('body').style.backgroundColor = 'rgb(253, 245, 0)' 
  document.querySelector('body').style.color = 'white'
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgb(222, 31, 2)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgb(24, 67, 167)'
  document.querySelector('body').style.color = 'white'
}
function partyPink(){
  document.querySelector('body').style.backgroundColor = 'rgb(232, 5, 153, 0.875)'
  document.querySelector('body').style.color = 'white'
}

function partyGrey(){
  document.querySelector('body').style.backgroundColor = 'rgba(128, 128, 128, 0.877)'
  document.querySelector('body').style.color = 'white'
}
function partyBlack(){
  document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.96)'
  document.querySelector('body').style.color = 'white'
}
function partyOrange(){
  document.querySelector('body').style.backgroundColor = 'rgb(255, 102, 0)'
  document.querySelector('body').style.color = 'white'
}