import './App.css'
import Counter from './Counter'
import Team from './team'
import Mama from './Mama'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button clicked')
  }
  const addToFive = (num) =>{
    alert(num+5)
  }

  return (
    <>
      
      <Counter></Counter>
      <Team></Team>
      <Mama></Mama>
      <Friends></Friends>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me</button>
      <button onClick={()=>{alert('game over')}}>click me</button>
      <button onClick={()=>addToFive(3)}>click me</button>
    </>
  )
}

export default App
