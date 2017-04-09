document.getElementById('diceAddForm').addEventListener('submit', function(e){
  e.preventDefault()
})

let diceRoller = (function(){
  let dice = []
  let diceCollection = document.getElementById('diceCollection')
  let numberOfDiceEl = document.getElementById('numberOfDice')
  let maxValueOfDiceEl = document.getElementById('maxValueOfDice')
  let modifierEl = document.getElementById('modifier')
  let messageEl = document.getElementById('message')

  numberOfDiceEl.focus()

  let add = function() {
    // error checking -numbers
    let numberOfDice = numberOfDiceEl.value
    numberOfDiceEl.value = ''

    let maxValueOfDice = maxValueOfDiceEl.value
    maxValueOfDiceEl.value = ''

    if(maxValueOfDice < 1 || numberOfDice < 1){
      messageEl.innerHTML = 'please enter only positive numbers'
    } else {
      messageEl.innerHTML = ''
      dice.push({ number: numberOfDice, maxValue: maxValueOfDice })
    }

    numberOfDiceEl.focus()
    RenderDice()
  }

  let roll = function() {
    result.innerHTML = ''
    let total = 0

    dice.forEach(die => {
      for(var i = 0; i < die.number; i++){
        total += getRand(die.maxValue)
      }
    })

    total += Number(modifierEl.value)
    setTimeout(function(){
      result.innerHTML = total
    },500)
  }

  let clear = function() {
    dice = []
    diceCollection.innerHTML = ''
    modifierEl.value = ''
    numberOfDiceEl.value = ''
    maxValueOfDiceEl.value = ''
    result.innerHTML = ''
    numberOfDiceEl.focus()
  }

  function RenderDice() {
    let output = ''

    dice.forEach(die => {
      output += `<p><span>${die.number}</span><span>d</span><span>${die.maxValue}</span></p>`
    })

    diceCollection.innerHTML = output
  }

  function getRand(maxNum){
    return Math.floor((Math.random() * maxNum) + 1)
  }

  return {
    add,
    roll,
    clear
  }
})()
