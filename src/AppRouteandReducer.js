import { useReducer } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

const reducer = (state, action) => {
  console.log(state)
  if (action.type === "ride")
    return {
      ...state,
      money: state.money + 10,
      customerCount: state.customerCount + 1,
    }
  if (action.type === "fuel")
    return {
      ...state,
      money: state.money - 50,
      refillCount: state.refillCount + 1,
    }
  new Error()
}

function App() {
  const initialState = { money: 100, refillCount: 0, customerCount: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <h1>Wallet: {state.money}</h1>
      <h2>Refill Count: {state.refillCount}</h2>
      <h2>Customer Count: {state.customerCount}</h2>
      <div>
        <button onClick={() => dispatch({ type: "ride" })}>
          A new customer!
        </button>
        <button onClick={() => dispatch({ type: "fuel" })}>
          Refill the tank!
        </button>
      </div>
    </div>
  )
}

export default App
