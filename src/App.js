import Counter from "./components/Counter"
import Heading from "./components/Heading"
import MealsList from "./components/MealsList"
import "./index.css"
import MealsProvider from "./providers/MealsProvider"

function App() {
  return (
    <div className="App">
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  )
}

export default App
