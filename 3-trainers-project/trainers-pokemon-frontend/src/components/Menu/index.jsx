import './index.css';

function Menu() {
    return (
        <nav>
            <div>
                <img src="" alt="logo de trainers" className='logo-img' />
            </div>
            <ul className='nav-items'>
                <a href="/" className='nav-link'>
                    Inicio
                </a>
                <a href="/new-trainer" className='nav-link'>
                    Registro entrenador
                </a>
                <a href="/about" className='nav-link'>
                    Acerca de nosotros
                </a>
            </ul>
        </nav>
    )
}

export { Menu };