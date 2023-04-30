import React, { useState } from "react"
import Heading from "./components/Heading"
import "./index.css"

function App() {
  function handleClick() {
    setWord("Drink")
  }
  const [word, setWord] = useState("Eat")
  return (
    <div className="App">
      <Heading message={word + " a Little Lemon"} />
      <button onClick={handleClick}> Click Here!</button>
    </div>
  )
}

export default App
