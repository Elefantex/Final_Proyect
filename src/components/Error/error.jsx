
import React from "react";
import { Link } from 'react-router-dom';
import './error.css';


function Error() {
    return (
        <div>
            <div>
                ERROR PAGINA NO ENCONTRADA
                <p class="bajar"><Link to="/">Inicio</Link></p>
            </div>


        </div>

    )
}


export default Error;