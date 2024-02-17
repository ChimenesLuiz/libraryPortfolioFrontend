import { useState } from 'react'
import './App.css'
import 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
    </div>
    </>
  )
}

export default App
