import { useState } from 'react'
import Boton from './components/Boton'
import Texto from './components/Texto'
import './App.css'

function App() {
  /**
   * Tipos de componentes
   * - Stateless: (Sin estado)
   * - Stateful: (Con estado)
   */

  return (
    <>
      <h1>Hola desde vite!</h1>
      <Texto />
      {/* <Boton texto="Pizza" icon='🍕'/>
      <Boton texto="Hamburguesa" icon="🍔"/>
      <Boton texto="Ramen" icon="🍜"/> */}
    </>
  )
}

export default App
