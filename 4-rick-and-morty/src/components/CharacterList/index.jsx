import React from 'react'

const CharacterList = (props) => {
  // children es un prop especial que recibe los componentes que se pasan como hijos 
  const { children } = props  
  return (
    <div className='container'>
        <div className='d-flex flex-wrap justify-content-around'>
            {/* Es como si importaramos el componente de CharacterCard aquí */}
            {children}
        </div>
    </div>
  )
}

export default CharacterList