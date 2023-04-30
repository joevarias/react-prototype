function ModeToggler() {
  let darkModeOn = false
  const darkMode = <h1>Dark Mode Is On</h1>
  const lightMode = <h1>Light Mode Is On</h1>

  function handleClick() {
    darkModeOn = !darkModeOn
    if (darkModeOn == true) {
      console.log("Dark Mode is On")
    } else {
      console.log("Light Mode is On")
    }
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default ModeToggler
