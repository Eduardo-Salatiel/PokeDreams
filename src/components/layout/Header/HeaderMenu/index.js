
//------------------------------------------------------------------------
import { Link } from 'react-router-dom';
import './style.scss';

const HeaderMenu = () => {
    return ( 
        <nav className="header-menu">
            <ul className="header-menu__list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pokedex">Pokémons</Link></li>
                <li><a href="https://www.pokemon.com/el/" target="_blank" rel="noreferrer">API</a></li>
            </ul>
        </nav>
     );
}
 
export default HeaderMenu;