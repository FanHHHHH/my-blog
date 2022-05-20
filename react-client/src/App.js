import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
// import init, { greet } from 'rust-wasm'
// import('rust-wasm').catch((e) => console.error('Error importing `index.js`:', e))
// import init, { add } from 'wasm-lib'
import { add } from 'rust-wasm'

function App() {
  // init().then(() => {
  //   add(1, 3)
  // })
  // import('wasm-lib').then((wasm) => {
  //   wasm.add(1, 3)
  // })
  useEffect(() => {
    add(1, 9)
  }, [])

  // import('wasm-lib').then((module) => {
  //   console.log(module)
  // })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
