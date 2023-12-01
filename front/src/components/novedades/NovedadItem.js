import '../../styles/components/pages/NovedadesPage.css'
import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, date, imagen, body } = props;

    return (
        <div className="novedad">
            <div className="contenido">
                <div className="centrado">
                    <h2>{title}</h2>
                </div>
                <h3>{subtitle}</h3>
                <h4>{date}</h4>
                <div className="centrado">
                    <img src={imagen} />
                </div>
                <div className="cuerpo" dangerouslySetInnerHTML={{ __html: body }} />
                <hr />
            </div>
        </div>
    );
}

export default NovedadItem;