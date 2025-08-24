
function Button() {

  function handleClick(e) {
    console.log(e.target)
    console.log("clicked!")
  }

  return (
    // <button onClick={handleClick}>Click Me</button>
    <button onClick={(e) => handleClick(e)}>Click Me</button>
  )
}

export default Button