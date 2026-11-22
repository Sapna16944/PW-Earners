// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

let colors=["red", "green", "pink", "yellow","black"]

let user={
  name:"Sapna",
  isOnline:true,
}

function printName(){
  console.log(user.name);
}
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>Hello</div>
    <div>Hii</div>
    <p>{5+6}</p>
    <ul>
      {
        colors.map(color=>{
          return <li>{color}</li>
        })
      }
    </ul>
    <p>
      {user.isOnline ? `${user.name} is online` : `${user.name} is offline`}
    </p>
    <button onClick={printName}>click on me</button>
    <img src="" alt="" />
    </>
  )
}

export default App
