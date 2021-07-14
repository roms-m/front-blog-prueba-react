import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './../../context/context';
import './sidebar.css';

function Sidebar(){

    const {user, dispatch} = useContext(Context)

    const handleLogout = (event) => {
        dispatch({ type: 'LOGOUT'})
    }

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Configuración</h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/settings/">Perfil</Link>
                        </li>
                        <li className="sidebarListItem">Información personal</li>
                        <li className="sidebarListItem">Cuenta</li>
                        <li className="sidebarListItem">Seguridad</li>
                        <li className="sidebarListItem">Reportes</li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Blog</h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">Post</li>
                        <li className="sidebarListItem">
                            <Link to="/settings/create/category">Categorias</Link>
                        </li>
                        <li className="sidebarListItem">Comentarios</li>
                        <li className="sidebarListItem">Más visitados</li>
                        <li className="sidebarListItem">Estadisticas</li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <li className="sidebarListItem logout" onClick={ handleLogout }>Cerrar sesión</li>
                    </ul>
                </div>

            </div>            
        </div>
    )
}

export default Sidebar;