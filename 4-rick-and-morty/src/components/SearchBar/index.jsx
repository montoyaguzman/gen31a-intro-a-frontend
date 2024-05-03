import React from 'react'

const SearchBar = (props) => {
  const { text, setText, search } = props

  const handleSubmit = (e) => {
    // El 'preventDefault' evita que se recargue la página
    e.preventDefault()
    // Ejecuta la función 'search' que se recibe por props
    search()
  }
  
  return (
    <nav className="navbar">
        <div className="container-fluid justify-content-evenly">
          {/* Se agrega el evento 'onSubmit' al formulario, se lanza al precionar el botón de 'Search' */}
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // El valor del input es el estado 'text' que se recibe por props
              value={text}
              // Al escribir en el input, se actualiza el estado 'text' con el valor del input
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
  )
}

export default SearchBar