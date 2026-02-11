import { useEffect, useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(() => {
    const value = localStorage.getItem('count');
    return value ? Number(value) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
          <button onClick={() => setCount((count) => count - 1)}>-</button>
          <p>count is {count}</p>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
