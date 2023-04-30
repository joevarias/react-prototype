import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import "./index.css"
import avatar from "./logo.svg"
import Button from "./components/Button"
import ModeToggler from "./ModeToggler"
import Promo from "./components/Promo"
import Child from "./components/Child"

const date = new Date()

function App() {
  return (
    <div>
      <Child message={date.toLocaleDateString()} />
    </div>
  )
}

export default App
