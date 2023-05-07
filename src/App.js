import { useReducer } from "react"

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
