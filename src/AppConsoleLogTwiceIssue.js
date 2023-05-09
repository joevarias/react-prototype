import { useEffect, useState } from "react"

let renderCount = 0

export default function App() {
  renderCount++

  console.log(`Rendered ${renderCount} times`)

  useEffect(() => {
    console.log("Mounted!")
  }, [])

  return (
    <>
      <h1>Hello!!</h1>
    </>
  )
}
