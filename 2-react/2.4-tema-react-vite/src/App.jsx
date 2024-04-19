import { useState } from 'react'
import Boton from './components/Boton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola desde vite!</h1>
      <Boton texto="Pizza" icon='🍕'/>
      <Boton texto="Hamburguesa" icon="🍔"/>
      <Boton texto="Ramen" icon="🍜"/>
    </>
  )
}

export default App
