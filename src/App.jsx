import Header from "./components/header/Header"
import Screen from "./components/status-screen/Screen"
import List from "./components/list/List"
import Letters from "./components/letters/Letters"
import Keyboard from "./components/keyboard/Keyboard"
import NewGameButton from "./components/newgame/NewGameButton"
import './App.css'

const App = () => {
  return(
    <main className="app-container">
      <Header />
      <Screen />
      <List />
      <Letters />
      <Keyboard />
      <NewGameButton />
    </main>
  )
}

export default App