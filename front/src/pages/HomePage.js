import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="entrada bastion">
                <img src="img/inicio/kid.png" alt="" />
                <div>
                    <h2>El juego es lo primero</h2>
                    <p>El objetivo de cada disciplina dentro de la empresa, sea arte, programación o servicio al
                        cliente, es que los juegos que creamos sean muy entretenidos para tantas personas como podamos alcanzar.
                    </p>
                </div>
            </div>
            <div className="entrada transistor">
                <img src="img/inicio/red.png" alt="" />
                <div>
                    <h2>Compromiso con la calidad</h2>
                    <p>Realizamos cada tarea con cuidado y seriedad, siempre en busca de sugerencias honestas que nos permitan mejorar la calidad de nuestro trabajo.
                        Al final del día, la mayoría de los jugadores no recordará si el juego se retrasó, sino únicamente que fue increíble.</p>
                </div>
            </div>
            <div className="entrada pyre">
                <img src="img/inicio/jodariel.png" alt="" />
                <div>
                    <h2>Todas las voces cuentan</h2>
                    <p>Las grandes ideas pueden surgir de cualquier parte. Hemos llegado hasta donde está actualmente gracias a las voces de nuestros jugadores 
                        y de cada uno de los miembros de la empresa. Se alienta a todos los empleados a hablar, escuchar, respetar las opiniones de los demás y 
                        aceptar la crítica como otra senda por donde pueden llegar grandes ideas.</p>
                </div>
            </div>
            <div className="entrada hades">
                <img src="img/inicio/zagreo.png" alt="" />
                <div>
                    <h2>Aprende y crece</h2>
                    <p>La industria de los videojuegos se encuentra en cambio constante. La tecnología mejora, las técnicas cambian y las filosofías de diseño 
                        se tornan anticuadas. Hemos trabajado para crecer con la experiencia: aprendemos los unos de los otros y cultivamos el deseo de ser los 
                        mejores en lo que hacemos. Para nosotros, esa es una responsabilidad que existe tanto a nivel individual como empresarial. Los empleados 
                        pueden contar con el apoyo de sus compañeros, supervisores y la empresa misma para obtener el conocimiento y la capacitación que necesiten.</p>
                </div>
            </div>
            <div className="entrada hades2">
                <img src="img/inicio/milinoe.png" alt="" />
                <div>
                    <h2>Dirige con responsabilidad</h2>
                    <p>Nuestros productos y prácticas pueden afectar no solo a nuestros empleados y jugadores, sino a la totalidad de la industria. Como una de las 
                        empresas de videojuegos líderes en el mundo, tenemos el compromiso de tomar decisiones éticas, considerar siempre a nuestros jugadores y 
                        establecer un sólido ejemplo de profesionalismo y excelencia en todo momento.</p>
                </div>
            </div>
        </main>
    )
}

export default HomePage