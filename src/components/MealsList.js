import { useMealsListContext } from "../providers/MealsProvider"

function MealsList() {
  const { meals } = useMealsListContext()
  const b = useMealsListContext()
  console.log(b)
  console.log(meals)
  return (
    <div>
      <h1>Meals List using Context API</h1>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  )
}

export default MealsList
