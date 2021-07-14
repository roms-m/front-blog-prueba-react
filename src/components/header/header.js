import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './../../context/context';
import './header.css';

function Header(){

    const {user, dispatch} = useContext(Context)

    const handleLogout = (event) => {
        dispatch({ type: 'LOGOUT'})
    }
    
    return (
        <div className="header">

            <div className="topLeft">
                <span className="top-title">RomaBlog</span>
            </div>
            <div className="topRight">
                <ul className="header-list">
                    <li className="header-list-item">
                        <Link className="link" to="/">Inicio</Link>
                    </li>
                    <li className="header-list-item">Blog</li>
                    <li className="header-list-item">Contacto</li>
                    {
                        user ? (
                            <Link to="/settings">
                                <img src="https://picsum.photos/id/237/200/300" alt="" className="img-pic" />
                            </Link>
                        ) : (
                            <li className="header-list-item">
                                <Link className="link" to="/login">Login</Link>
                            </li>
                        )
                    }

                </ul>
            </div>
        </div>
    );
}

export default Header;