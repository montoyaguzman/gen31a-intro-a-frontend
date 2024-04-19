import React from 'react'

const PokemonCard = (props) => {
  // Destructuración de las props para obtener la url y el nombre del pokemon 
  const { url, name } = props
  
  return (
    <div>
        <div className='img-avatar'>
            {/* Agregamos la url y el name de las props */}
            <img src={url} alt={name} width="250"/>
        </div>
        <div>
            {/* Agregamos solo el nombre de las props */}
            <p>{name}</p>
        </div>
    </div>
  )
}

export default PokemonCard