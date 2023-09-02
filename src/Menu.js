function Menu({ srcChange }) {
  function handleClick(e) {
    srcChange(e.target.value)
    console.log(`Your selected from the menu the ${e.target.value} option`)
  }

  return (
    <form onClick={handleClick}>
      <input type='radio' name='src' value='fast' /> fast
      <input type='radio' name='src' value='slow' /> slow
      <input type='radio' name='src' value='cute' /> cute
      <input type='radio' name='src' value='eek' /> eek
    </form>
  )
}

export default Menu
