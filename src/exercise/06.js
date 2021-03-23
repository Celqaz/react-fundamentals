// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 构造inputRef对象
  const [username, setUsername] = React.useState('')
  const inputRef = React.useRef()
  
  const [error, setError] = React.useState()
  
  function handleSubmit(event) {
    event.preventDefault()
    // console.log('submitted')
    // console.log(event.target)
    // const user_input_lastname = event.target.lastname.value
    // 获取inputRef参考对象的值
    // const user_input_lastname = inputRef.current.value
    // onSubmitUsername(user_input_lastname)
    onSubmitUsername(username)
  }
  // counter useState()
  function Counter() {
    const [count, setCount] = React.useState(0)
    const increment = () => setCount(count + 1)
    return <button onClick={increment}>{count}</button>
  }
  // lowercase validation
  // function handleChange(event) {
  //   // const {var} = a.b.var
  //   const {value} = event.target
  //   // const value = event.target.value
  //   const isValid = value === value.toLowerCase()
  //   setError(isValid ? null : 'Username must be lower case')
  //   // const isValid = inputValue === inputValue.toLowerCase()
  //   // setError(isValid ? null : 'Username must be lower case')
  //   // return isValid
  // }
  function handleChangeV2(event){
    const {value} = event.target
    setUsername(value.toLowerCase())
    // const value = event.target.value
    // const isValid = value === value.toLowerCase()


  }


  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          {/* 定义Ref */}
          <input
            ref={inputRef}
            type="text"
            id="lastname"
            onChange={handleChangeV2}
            value={username}        
          />
        </div>
        <div style={{color:'red'}}>{error}</div>
        <button disabled={Boolean(error)} type="submit">Submit</button>
      </form>
      <Counter />
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
