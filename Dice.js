document.getElementById('dice-form').addEventListener('submit', function(event){
  event.preventDefault()
})

function rollDice(){
  var number = Number(document.getElementById('numberOfDice').value)
  var max = Number(document.getElementById('maxNumber').value)

  document.getElementById('result').innerHTML = getResult(number, max)
}

function getResult(num, max){
  var mod = Number(document.getElementById('modNumber').value)
  console.log(mod)
  if(isNaN(num) || num < 1){
    return 'Please enter a number of dice, 1 or greater.'
  }

  if(isNaN(max) || max < 2){
    return 'Please enter a maximum number, 2 or greater.'
  }

  var total = 0
  for(var i = 1; i <= num; i++){
    total += getRand(max)
  }
  return total + mod
}

function getRand(maxNum){
  return Math.floor((Math.random() * maxNum) + 1)
}
