import '../styles/components/pages/NovedadesPage.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <main className="holder">
            <div className="novedades">
                <h1>Novedades</h1>
                {
                    loading ? (
                        <p>Cargando...</p>
                    ) : (
                        novedades.map(item => <NovedadItem key={item.id}
                            title={item.titulo} subtitle={item.subtitulo}
                            date={item.fecha} imagen={item.imagen} body={item.cuerpo} />)
                    )
                }
            </div>
        </main>
    );
};


export default NovedadesPage;