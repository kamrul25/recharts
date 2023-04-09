import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Chart from './components/Chart/Chart'
import AnotherChart from './components/AnotherChart/AnotherChart'
import Phonebar from './components/Phonebar/Phonebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar ></Navbar>
     <h1 className='text-7xl text-purple-600 text-center
     '>Hello frow tailwind with react</h1>

     <Chart></Chart>
     <AnotherChart></AnotherChart>

     <Phonebar></Phonebar>
    </div>
  )
}

export default App
