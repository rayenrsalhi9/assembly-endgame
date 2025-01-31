import { useState, useEffect } from 'react'
import Header from "./components/header/Header"
import Screen from "./components/status-screen/Screen"
import List from "./components/list/List"
import Letters from "./components/letters/Letters"
import Keyboard from "./components/keyboard/Keyboard"
import NewGameButton from "./components/newgame/NewGameButton"
import './App.css'

const App = () => {
  
  const [word, setWord] = useState('');
  const [wordGuess, setWordGuess] = useState([])
  const [gameOver, setGameOver] = useState(false)

  const fetchApi = () => {
    fetch('https://api.datamuse.com/words?ml=programming')
        .then(data => data.json())
        .then(res => res.map(el => el.word))
        .then(res => res.filter(el => el.length <= 10))
        .then(res => res[Math.floor(Math.random() * res.length)])
        .then(res => setWord(res))
  }

  useEffect(() => {
    fetchApi()
  }, [])
  
  useEffect(() => {
    !gameOver &&
      fetchApi()
  }, [gameOver])

  useEffect(() => {
    setWordGuess(Array(word.length).fill({
      value: '',
      isCorrect: null
    }))
  }, [word])

  useEffect(() => {
    if (!gameOver && wordGuess.every(el => el.value !== '')) {
      setGameOver(true);
    }
  }, [wordGuess, gameOver])
  
  const numberOfOccurences = (guessValue) => {
    let occurences = []
    for (let i = 0; i < word.length; i++) {
      if (guessValue === word[i]) {
        occurences.push(i)
      }
    }
    return occurences
  }

  const handleClick = (guessValue) => {  
    if (!gameOver) {
      const occurrences = numberOfOccurences(guessValue);
      if (occurrences.length > 0) {
        occurrences.map(occurenceIndex => {
          setWordGuess(prevGuess => prevGuess.map((el, index) => {
            return index === occurenceIndex ?
              {...el, value: guessValue} :
              el  
          }))
        })
      }
    }
  }

  const replay = () => {
    setGameOver(false)
  }

  return(
    <main className="app-container">
      <Header />
      {gameOver && <Screen />}
      <List />
      <Letters wordGuess={wordGuess}/>
      <Keyboard handleClick={handleClick}/>
      {gameOver && <NewGameButton  replay={replay}/>}
    </main>
  )
}

export default App