function App() {
  const time = new Date("2023-05-04")
  const day = time.toLocaleString("en-us", { weekday: "long" })
  const morning = time.getHours() >= 6 && time.getHours() <= 12
  let dayMessage

  console.log(day)
  console.log(time.getHours())

  switch (day) {
    case "Monday":
      dayMessage = `Happy ${day}`
      break
    case "Tuesday":
      dayMessage = `${day}, four days to go`
      break
    case "Wednesday":
      dayMessage = `${day}, halfway there`
      break
    case "Thursday":
      dayMessage = `${day}, start planning the weekend`
      break
    case "Friday":
      dayMessage = `Woo-hoo, the weekend is coming!`
      break
    default:
      dayMessage = "Stay calm and have fun!"
      break
  }

  return (
    <div className="App">
      <h1>{dayMessage}</h1>
      {morning ? <h2>Have you had your breakfast yet?</h2> : ""}
    </div>
  )
}

export default App
