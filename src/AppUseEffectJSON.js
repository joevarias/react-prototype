import { useEffect, useState } from "react"

export default function App() {
  const [resourceType, setResourceType] = useState("posts")
  const [items, setItems] = useState([])

  console.log("render")
  useEffect(() => {
    console.log("resourceType Changed!")
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item, key) => {
        return <pre key={key}>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}
