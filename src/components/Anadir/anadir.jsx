import React from "react";
import { Link } from 'react-router-dom';



function AnadirSinRegistar() {
    

   

    return ((
        <>
             <><h1>
            Tienes que ser administrador de la pagina para poder acceder a esta web
        </h1>
            <Link to="/">
                Volver a la tienda
            </Link>
        </>

        </>

    )

    )
}


export default AnadirSinRegistar