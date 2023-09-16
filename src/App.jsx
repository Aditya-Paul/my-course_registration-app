/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    fetch("")
  },[])

  return (
    <>
      <div className=' text-6xl font-medium text-center pt-[40px] pb-[35px] text-slate-800 bg-[#F3F3F3]'>
        <h1>Course Registration</h1>
        <Home></Home>
      </div>
    </>
  )
}

export default App
