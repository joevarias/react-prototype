import { useEffect, useState } from "react"

export default function App() {
  console.log(window)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <div>
        <h1>{windowWidth}</h1>
      </div>
    </>
  )
}
