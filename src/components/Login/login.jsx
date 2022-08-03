import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';


import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './login.css';



const Login = () => {
    const navigate = useNavigate();
    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassword] = useState('');
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    const [shown2, setShown2] = useState(false)
    const switchShown2 = () => setShown2(!shown2);


    const handleChange = (e) => {
        if (e.target.name === 'email') {
            establecerCorreo(e.target.value);
        } else if (e.target.name === 'password') {
            establecerPassword(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});

        // Comprobamos del lado del cliente que el correo sea valido.
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(correo)) {
            alert("Por favor ingresao un correo electronico valido")
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Por ingresa un correo electrónico valido'
            });
            return;
        }

        if (correo === '' || password === '') {
            alert("Por favor rellena todos los datos")
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Por favor rellena todos los datos'
            });
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, correo, password);
            window.location.href = '/';


        } catch (error) {
             
            cambiarEstadoAlerta(true);
            let mensaje;
            switch (error.code) {
                case 'auth/wrong-password':
                    mensaje = 'La contraseña no es correcta.'
                    alert("La contraseña no es correcta.")
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                    alert("Ya existe una cuenta con el correo electrónico proporcionado")
                    break;
                case 'auth/user-not-found':
                    mensaje = 'No se encontro ninguna cuenta con este correo electrónico.'
                    alert("No se encontro ninguna cuenta con este correo electrónico.")
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                    break;
            }

            cambiarAlerta({ tipo: 'error', mensaje: mensaje });
        }
    }


    return (
        <>
            <div class="CajaLogin2">
                <div class="form-floating mb-3">
                    <div class="form-floating">
                        <div class="DatosLogin2">



                            <form onSubmit={handleSubmit} >
                                <p>

                                    <h2>Correo Electronico</h2>
                                    <input type="email"
                                        name="email"
                                        class="form-control"
                                        placeholder="Correo Electrónico"
                                        value={correo}
                                        onChange={handleChange} />

                                </p>

                                <h2>Contraseña</h2>
                                <p>

                                    <div class="buttonIn">


                                        <input type={shown2 ? 'text' : 'password'}
                                            name="password"
                                            class="form-control input-prueba"
                                            placeholder="Contraseña"
                                            value={password}
                                            maxlength="16"
                                            onChange={handleChange} />

                                        <button onClick={switchShown2} type="button" class="btn btn-secondary boton-prueba"> {shown2 ? <FaEyeSlash /> : <FaEye />}</button>
                                    </div>

                                </p>


                                <button primario type="submit" class="btn btn-outline-primary">Acceder</button>
                                <p>

                                </p>
                                <p>
                                    <button class="btn btn-outline-light">
                                        <Link to="/registro">
                                            Acceder a registro
                                        </Link>
                                    </button>

                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Login;