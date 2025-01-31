import { useState, useEffect } from 'react'
import Header from "./components/header/Header"
import Screen from "./components/status-screen/Screen"
import List from "./components/list/List"
import Letters from "./components/letters/Letters"
import Keyboard from "./components/keyboard/Keyboard"
import NewGameButton from "./components/newgame/NewGameButton"
import './App.css'

const App = () => {
  // get a random word
  const [word, setWord] = useState('');

  useEffect(() => {
    fetch('https://api.datamuse.com/words?ml=programming')
      .then(data => data.json())
      .then(res => res.map(el => el.word))
      .then(res => res.filter(el => el.length <= 10))
      .then(res => res[Math.floor(Math.random() * res.length)])
      .then(res => setWord(res))
  }, [])

  // handle buttons click

  return(
    <main className="app-container">
      <Header />
      <Screen />
      <List />
      <Letters word={word}/>
      <Keyboard />
      <NewGameButton />
    </main>
  )
}

export default App