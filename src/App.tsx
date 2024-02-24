import { useState } from 'react'
import {CardForm} from './components/CardForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex bg-slate-50 justify-center items-center h-screen w-full'>
      <CardForm/>
    </div>
  )
}

export default App
