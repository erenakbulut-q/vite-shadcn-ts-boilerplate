import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-auto' >
      <h1 className='text-red-500'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button>Testing</Button>
      <Button variant={"secondary"}>Testing</Button>
      <Button variant={"destructive"}>Testing</Button>
    </div>
  )
}

export default App
