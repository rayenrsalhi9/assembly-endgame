import { useState, useEffect } from 'react'
import Header from "./components/header/Header"
import Screen from "./components/status-screen/Screen"
import List from "./components/list/List"
import Letters from "./components/letters/Letters"
import Keyboard from "./components/keyboard/Keyboard"
import NewGameButton from "./components/newgame/NewGameButton"
import ReactConfetti from 'react-confetti'
import emptyHeart from './assets/empty-heart.png'
import fullHeart from './assets/filled-heart.png'
import './App.css'

function renderAllKeys() {
  const allLetters = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

  const allKeys = allLetters.map(el => ({
      value: el,
      isDisabled: false,
      isCorrect: null
  }))

  return allKeys
}

function renderHearts() {
  const hearts = Array(10).fill({
      src: fullHeart,
      alt: 'full heart icon'
  })
  return hearts
}

const App = () => {
  const [word, setWord] = useState('');
  const [wordGuess, setWordGuess] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [allKeys, setAllKeys] = useState(renderAllKeys)
  const [hearts, setHearts] = useState(renderHearts)
  const [count, setCount] = useState(0)
  const [screen, setScreen] = useState({
    background: '#282726',
    title: '',
    description: ''
  })

  const fetchApi = () => {
    fetch('https://api.datamuse.com/words?ml=programming')
        .then(data => data.json())
        .then(res => res.map(el => el.word))
        .then(res => res.filter(el => el.length <= 10 && el.length >= 4))
        .then(res => res[Math.floor(Math.random() * res.length)])
        .then(res => setWord(res.toUpperCase()))
        .catch(error => console.error("Error fetching word:", error));
  }

  // [1] : get a random word on mount
  useEffect(() => {
    fetchApi()
  }, [])

  // [2] : make an array out the generated word:
  useEffect(() => {
    setWordGuess(Array(word.length).fill({
      value: '',
      isCorrect: null
    }))
  }, [word])

  // win case :
  useEffect(() => {
    if (word.length > 0 && wordGuess.length > 0 && wordGuess.every(el => el.value !== '' && el.isCorrect === true)) {
      setGameWon(true)
      setGameOver(true)
      setScreen({
        background: '#10A95B',
        title: 'You win!',
        description: 'Well done! 🎉'
      })
    }
  }, [wordGuess])

  // lose case
  useEffect(() => {
    if (count === hearts.length) {
      setGameOver(true)
      setScreen({
        background: '#BA2A2A',
        title: 'Game over!',
        description: 'You lose! Better start learning Assembly 😭'
      })
      setWordGuess(prev => prev.map((el, index) => {
        return el.value === '' ?
        {...el, value: word[index], isCorrect: false} : el
      }))
    }
  }, [count, hearts])
  
  const numberOfOccurences = (guessValue) => {
    let occurences = []
    for (let i = 0; i < word.length; i++) {
      if (guessValue === word[i]) {
        occurences.push(i)
      }
    }
    return occurences
  }

  const handleClick = (guessLetter) => {  
    if (!gameOver) {
      const occurrences = numberOfOccurences(guessLetter.value);
      if (occurrences.length > 0) {
        setWordGuess(prevGuess => prevGuess.map((el, index) => {
          return occurrences.includes(index) ?
            {...el, value: guessLetter.value, isCorrect: true} :
            el  
        }))
        setAllKeys(prev => prev.map(el => {
          return el.value === guessLetter.value ?
                {...el, isCorrect: true, isDisabled: true} :
                el
        }))
      } else {
        setAllKeys(prev => prev.map(el => {
          return el.value === guessLetter.value ?
                {...el, isCorrect: false, isDisabled: true} :
                el
        }))
        setHearts(prevHearts => prevHearts.map((el, index) => {
          return index === count ?
          {...el, src: emptyHeart} : el
        }))
        setCount(prevCount => prevCount + 1)
      }
    }
  }

  const replay = () => {
    fetchApi()
    setGameOver(false)
    setGameWon(false)
    setAllKeys(renderAllKeys)
    setHearts(renderHearts)
    setCount(0)
    setScreen({
      background: '#282726',
      title: '',
      description: ''
    })
  } 

  return(
    <main className="app-container">
      <Header hearts={hearts}/>
      {gameOver && <Screen screen={screen}/>}
      <List hearts={hearts}/>
      <Letters wordGuess={wordGuess}/>
      <Keyboard handleClick={handleClick} allKeys={allKeys}/>
      {gameOver && <NewGameButton  replay={replay}/>}
      {gameWon && <ReactConfetti />}
    </main>
  )
}

export default App