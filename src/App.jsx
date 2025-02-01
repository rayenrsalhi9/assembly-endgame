import { useState, useEffect } from 'react'
import Header from "./components/header/Header"
import Screen from "./components/status-screen/Screen"
import List from "./components/list/List"
import Letters from "./components/letters/Letters"
import Keyboard from "./components/keyboard/Keyboard"
import NewGameButton from "./components/newgame/NewGameButton"
import ReactConfetti from 'react-confetti'
import './App.css'

const App = () => {
  const [word, setWord] = useState('');
  const [wordGuess, setWordGuess] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [allKeys, setAllKeys] = useState(renderAllKeys())

  const fetchApi = () => {
    fetch('https://api.datamuse.com/words?ml=programming')
        .then(data => data.json())
        .then(res => res.map(el => el.word))
        .then(res => res.filter(el => el.length <= 10 && el.length >= 4))
        .then(res => res[Math.floor(Math.random() * res.length)])
        .then(res => setWord(res.toUpperCase()))
  }

  useEffect(() => {
    fetchApi()
  }, [])

  useEffect(() => {
    setWordGuess(Array(word.length).fill({
      value: '',
      isCorrect: null
    }))
  }, [word])

  useEffect(() => {
    if (wordGuess.every(el => el.value !== '')) {
      setGameOver(prev => !prev);
    }
  }, [wordGuess])
  
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
            {...el, value: guessLetter.value} :
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
      }
    }
  }

  const replay = () => {
    fetchApi()
    setGameOver(false)
    setAllKeys(renderAllKeys())
  }

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

  return(
    <main className="app-container">
      <Header />
      {gameOver && <Screen />}
      <List />
      <Letters wordGuess={wordGuess}/>
      <Keyboard handleClick={handleClick} allKeys={allKeys}/>
      {gameOver && <NewGameButton  replay={replay}/>}
      {gameOver && <ReactConfetti />}
    </main>
  )
}

export default App