import { Link } from "react-router-dom";
import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <div className="contacto">
                <form action="/contacto" method="post" onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar"/>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>


                <div class="otros-medios">
                    <h2>Redes sociales</h2>
                    <h4>En caso de consultas mas informales podes contactarte mediante nuestras redes sociales!</h4>
                    <div className="redes">
                        <Link to="#"><img src="img/redes/facebook.png" alt="facebook" /></Link>
                        <Link to="#"><img src="img/redes/intagram.png" alt="instagram" /></Link>
                        <Link to="#"><img src="img/redes/x.png" alt="x" /></Link>
                        <Link to="#"><img src="img/redes/youtube.png" alt="youtube" /></Link>
                        <Link to="#"><img src="img/redes/discord.png" alt="discord" /></Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ContactoPage