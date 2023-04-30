import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import "./index.css"
import avatar from "./logo.svg"
import Button from "./components/Button"
import ModeToggler from "./ModeToggler"
import Promo from "./components/Promo"

const url = "/tickets"
const reactPic = <img src={avatar} />

function Logo() {
  return reactPic
}

function App() {
  return (
    <div>
      <Promo />
    </div>
  )
}

export default App
