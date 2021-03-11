
document.addEventListener('DOMContentLoaded', () => {
//card options
const cardArray = [
  {
    name: 'chill',
    img: 'src/images/chill.png'
  } ,
  {
    name: 'dissapointed',
    img: 'src/images/dissapointed.png'
  },
  {
    name: 'greeneyes',
    img: 'src/images/greeneyes.png'
  },
  {
    name: 'madface',
    img: 'src/images/madface.png'
  },
  {
    name: 'monster1',
    img: 'src/images/monster1.png'
  },
  {
    name: 'monster2',
    img: 'src/images/monster2.png'
  },
  {
    name: 'noob',
    img: 'src/images/noob.png'
  },
  {
    name: 'serious',
    img: 'src/images/serious.png'
  },
  {
    name: 'wow',
    img: 'src/images/wow.png'
  },
  {
    name: 'chill',
    img: 'src/images/chill.png'
  } ,
  {
    name: 'dissapointed',
    img: 'src/images/dissapointed.png'
  },
  {
    name: 'greeneyes',
    img: 'src/images/greeneyes.png'
  },
  {
    name: 'crying',
    img: 'src/images/crying.png'
  },
  {
    name: 'madface',
    img: 'src/images/madface.png'
  },
  {
    name: 'monster1',
    img: 'src/images/monster1.png'
  },
  {
    name: 'monster2',
    img: 'src/images/monster2.png'
  },
  {
    name: 'noob',
    img: 'src/images/noob.png'
  },
  {
    name: 'crying',
    img: 'src/images/crying.png'
  },
  {
    name: 'serious',
    img: 'src/images/serious.png'
  },
  {
    name: 'wow',
    img: 'src/images/wow.png'
  }
  
]
cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard () {
  for (let i = 0; i < cardArray.length; i++){
  const card = document.createElement('img')
  card.setAttribute('src', 'src/images/blank.png')
  card.setAttribute ('data-id', i)
  card.addEventListener ('click', flipCard)
  grid.appendChild(card)
    }
  }

function flipCard () {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout (checkForMatch, 500)
    }
  console.log(cardsChosenIds)
}

function checkForMatch () {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds [1]

  if (optionOneId === optionTwoId) {
    alert ('You have clicked the right image!')
    cards[optionOneId].setAttribute ('src', 'src/images/blank.png')
    cards[optionTwoId].setAttribute ('src', 'src/images/blank.png')
 } else if (cardsChosen [0] === cardsChosen[1]) {
   alert ('You have found a match')
    cards[optionOneId].setAttribute ('src', 'src/images/thumbUp.png')
    cards[optionTwoId].setAttribute ('src', 'src/images/thumbUp.png')
    cards[optionOneId].removeEventListener ('click', flipCard)
    cards[optionTwoId].removeEventListener ('click', flipCard)
    cardsWon.push(cardsChosen)
 } else {
    cards[optionOneId].setAttribute ('src', 'src/images/blank.png')
    cards[optionTwoId].setAttribute ('src', 'src/images/blank.png')
    
 }
  cardsChosen = []
  cardsChosenIds = []
  resultDisplay.textContent = cardsWon.length
    
  // if (cardsWon.length === cardArray.length /2 ) {
  //   resultDisplay.textContent = 'Congratz' 
  // }

  console.log(cardsWon)
  console.log(cardsChosen)
}


createBoard()
})

