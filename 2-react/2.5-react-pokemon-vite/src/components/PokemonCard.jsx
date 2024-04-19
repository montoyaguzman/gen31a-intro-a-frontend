import React from 'react'

const PokemonCard = (props) => {
  const { url, name } = props
  
  return (
    <div>
        <div className='img-avatar'>
            <img src={url} alt={name} width="250"/>
        </div>
        <div>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default PokemonCard