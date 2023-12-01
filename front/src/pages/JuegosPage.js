import { Link } from "react-router-dom"
import '../styles/components/pages/JuegosPage.css'

const JuegosPage = (props) => {
    return (

        <main className="holder">
            <div className="juegos">
                <div className="juego">
                    <img src="img/juegos/hades-II.png" alt="" />
                    <div className="contenido-juego">
                        <div>
                            <h2>Hades II</h2>
                            <p>Usa las artes oscuras para abrirte paso más allá del inframundo y enfréntate al Titán del
                                Tiempo
                                en
                                esta cautivadora continuación del galardonado juego de mazmorras de tipo rogue-like.</p>
                        </div>
                        <div className="logos">
                            <Link to="#"><img src="img/juegos/steam-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/epic-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/xbox-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/playstation-logo.png" alt="" className="logo" /></Link>
                        </div>
                    </div>
                </div>
                <div className="juego">
                    <img src="img/juegos/hades.png" alt="" />
                    <div className="contenido-juego">
                        <div>
                            <h2>Hades</h2>

                            <p>Hades es un juego roguelike de exploración de mazmorras que combina los mejores aspectos de
                                los aclamados títulos anteriores de Supergiant, como la acción rápida de Bastion, la
                                atmósfera y la profundidad de Transistor y la narrativa centrada en los personajes de Pyre.
                            </p>
                        </div>
                        <div className="logos">
                            <Link to="#"><img src="img/juegos/steam-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/epic-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/xbox-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/playstation-logo.png" alt="" className="logo" /></Link>
                        </div>
                    </div>
                </div>
                <div className="juego">
                    <img src="img/juegos/pyre.png" alt="" />
                    <div className="contenido-juego">
                        <div>
                            <h2>Pyre</h2>
                            <p>Pyre es un RPG por equipos en el que intentarás conducir a la libertad a una banda de
                                exiliados alcanzando la victoria en las ancestrales competiciones que se libran en un vasto
                                y místico purgatorio. ¿Quién regresará entre laureles y quién pasará el resto de sus días
                                condenado al exilio?</p>
                        </div>
                        <div className="logos">
                            <Link to="#"><img src="img/juegos/steam-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/epic-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/xbox-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/playstation-logo.png" alt="" className="logo" /></Link>
                        </div>
                    </div>

                </div>
                <div className="juego">
                    <img src="img/juegos/transistor.png" alt="" />
                    <div className="contenido-juego">
                        <div>
                            <h2>Transistor</h2>
                            <p>Transistor, de los creadores de Bastion, es un juego de rol con temática de ciencia ficción
                                que te invita a blandir un arma extraordinaria de origen desconocido para luchar a lo largo
                                y ancho de una espectacular ciudad futurista. El juego fusiona a la perfección elementos de
                                planificación estratégica y analítica en una experiencia de acción vertiginosa, y combina
                                mecánicas muy precisas con una historia que te atrapará. En el transcurso de la aventura,
                                irás desentrañando los misterios de la Transistor mientras vas en busca de sus anteriores
                                propietarios.</p>
                        </div>
                        <div className="logos">
                            <Link to="#"><img src="img/juegos/steam-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/epic-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/xbox-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/playstation-logo.png" alt="" className="logo" /></Link>
                        </div>
                    </div>

                </div>
                <div className="juego">
                    <img src="img/juegos/bastion.png" alt="" />
                    <div className="contenido-juego">
                        <div>
                            <h2>Bastion</h2>
                            <p>Bastion es toda una experiencia de rol y acción que redefine la narración en los videojuegos,
                                con un narrador reactivo que marca cada uno de tus movimientos. Explora más de 40
                                exuberantes entornos dibujados a mano mientras desvelas los secretos del Gran Desastre, una
                                catástrofe surrealista que destrozó el mundo haciéndolo pedazos. Maneja todo un arsenal de
                                armas mejorables y lucha contra bestias salvajes adaptadas a su nuevo hábitat. ¡Termina la
                                historia principal para desbloquear el modo Partida Nueva Plus y continuar tu viaje!</p>
                        </div>
                        <div class="logos">
                            <Link to="#"><img src="img/juegos/steam-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/epic-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/xbox-logo.png" alt="" className="logo" /></Link>
                            <Link to="#"><img src="img/juegos/playstation-logo.png" alt="" className="logo" /></Link>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    )
}

export default JuegosPage;