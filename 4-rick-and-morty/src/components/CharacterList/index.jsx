import React from 'react'

const CharacterList = (props) => {
  const { children } = props  
  return (
    <div className='container'>
        <div className='d-flex flex-wrap justify-content-around'>
            {children}
        </div>
    </div>
  )
}

export default CharacterList