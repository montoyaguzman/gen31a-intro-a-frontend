import './index.css';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <div>
                <img src={logo} alt="logo de trainers" className='logo-img' />
            </div>
            <ul className='nav-items'>
                <Link to="/" className='nav-link'>
                    Inicio
                </Link>
                <Link to="/new-trainer" className='nav-link'>
                    Registro entrenador
                </Link>
                <Link to="/about" className='nav-link'>
                    Acerca de nosotros
                </Link>
            </ul>
        </nav>
    )
}

export { Menu };