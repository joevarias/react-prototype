// function Button() {
//   const clickHandler = () => console.log("clicked!")
//   return <button onClick={clickHandler}>Click me!</button>
// }

// export default Button

function Button() {
  const mouseOver = () => console.log("mouse over!")
  return <button onMouseOver={mouseOver}>Click me!</button>
}

export default Button
