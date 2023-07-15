import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const returnsConvenientArray = () => {
    const blue = "blue"
    const object = {
      hello: "world"
    }

    return [1, object, blue]
  }

  const [one, object, blue] = returnsConvenientArray()
  const {helo} = object

  const [count, setCount] = useState(0) // This is returning something like [0, () => {}]
  console.log("count", count)
  // Destructuring objects

  // This function may be a library function
  // and it's code may not be easily accesible/
  // understandable
  const getCalculations = (a, b) => {
    return {
      sum: a+b,
      diff: a-b,
      prod: a*b,
      div: a/b
    }
  }

  // Just getting the sum property
  const { div }  = getCalculations(1, 2)

  // Aliasing to avoid name colisions
  const { sum: sum1 } = getCalculations(1, 2)
  const { sum: sum2 } = getCalculations(2, 3)

  //Destructuring from an array
  const getSumAndDiff = (a, b) => {
    return [a+b, a-b]
  }
// names dont matter, position do
  const [whatever1, whatever2] = getSumAndDiff(1, 2)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Vite + React </h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
