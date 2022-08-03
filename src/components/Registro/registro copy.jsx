import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import db from '../../firebase/firebase';

import './registro.css';





let datos = []
function Registro() {

    let [nombre, setNombre] = useState("")
    let [Password, setPassword] = useState("")
    let [PasswordVerficar, setPasswordVerficar] = useState("")


    const onChange = ({ currentTarget }) => setPassword(currentTarget.value);
    const onChange2 = ({ currentTarget }) => setPasswordVerficar(currentTarget.value);
    const [shown, setShown] = useState(false)
    const [shown2, setShown2] = useState(false)
    const switchShown = () => setShown(!shown);
    const switchShown2 = () => setShown2(!shown2);

    function cambiarNombre(event) {

        setNombre(event.target.value)
    }

    function borrarDatos() {
        setNombre("")
        setPassword("")
        setPasswordVerficar("")
        datos = []
    }



    const comprobar = async () => {
        const prueba = await getDoc(doc(db, "Usuarios", nombre))

        if (prueba.exists()) {
            alert("este usuario existe")

        }
        /*
        if (nombre === "" || Password === "" || PasswordVerficar === "") {
             ("fallo")
        } 
        */
        else if (Password != PasswordVerficar) {
            alert("no es la misma contraseña")

        }
        else {
            try {
                await setDoc(doc(db, "Usuarios", nombre), {
                    Usuario: nombre,
                    Password: Password

                })
            } catch (error) {
                 ("Error al guardar el documento")
                 (error)
            }

            window.location.href = "/login"
        }

    }

    return (
        <>

            <div class="CajaLogin">

                <div class="Datos">
                    <div class="formulario">


                        <p>Usuario</p>
                        <input type="text" placeholder='Usuario' value={nombre} onChange={cambiarNombre} required />


                        <div>
                            <p>Contraseña</p>
                            <input onChange={onChange} type={shown ? 'text' : 'password'} value={Password} placeholder='Contraseña' required />
                            <button onClick={switchShown}> {shown ? 'Ocultar' : 'Mostar'}</button>
                        </div>
                        <p>
                            <div>
                                <input onChange={onChange2} type={shown2 ? 'text' : 'password'} value={PasswordVerficar} placeholder='Verificar contraseña' required />
                                <button onClick={switchShown2}> {shown2 ? 'Ocultar' : 'Mostar'}</button>
                            </div>
                        </p>

                        <p>

                            <button onClick={comprobar}>Registrar con comprobacion</button>
                        </p>


                        <p>
                            <button onClick={borrarDatos}>Borrar datos</button>
                        </p>
                        <p>
                            <button> <Link to="/login">
                                Volver a login
                            </Link></button>

                        </p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Registro