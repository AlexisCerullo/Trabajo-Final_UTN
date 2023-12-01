import { NavLink } from "react-router-dom"
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
       <div className="color-nav">
            <div className="holder nav">
                <header>
                    <NavLink href="/"><img src="img/snes-controller.png" alt="Logo" /></NavLink>

                    <h1>Game Dev Studio</h1>
                </header>
                <nav>
                    <ul>
                        <NavLink to="/" className={({ isActive })=> isActive ? "activo borde-izquierdo": "borde-izquierdo"}>
                            <li>Inicio</li>
                        </NavLink>
                        <NavLink to="/juegos" className={({ isActive })=> isActive ? "activo": undefined}>
                            <li>Juegos</li>
                        </NavLink>
                        <NavLink to="/nosotros" className={({ isActive })=> isActive ? "activo": undefined}>
                            <li>Nosotros</li>
                        </NavLink>
                        <NavLink to="/novedades" className={({ isActive })=> isActive ? "activo": undefined}>
                            <li>Novedades</li>
                        </NavLink>
                        <NavLink to="/contacto" className={({ isActive })=> isActive ? "activo borde-derecho": "borde-derecho"}>
                            <li>Contacto</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;