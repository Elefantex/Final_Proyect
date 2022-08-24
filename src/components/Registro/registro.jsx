import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';




import './registro.css';



const Registro = () => {

    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassword] = useState('');
    const [password2, establecerPassword2] = useState('');
    const [shown2, setShown2] = useState(false)
    const switchShown2 = () => setShown2(!shown2);
    const [shown, setShown] = useState(false)
    const switchShown = () => setShown(!shown);


    const navigate = useNavigate();

    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                establecerCorreo(e.target.value);
                break;
            case 'password':
                establecerPassword(e.target.value);
                break;
            case 'password2':
                establecerPassword2(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});

        // Comprobamos del lado del cliente que el correo sea valido.
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(correo)) {
            alert("Insert a correct email")
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Insert a correct email'
            });
            return;
        }

        if (correo === '' || password === '' || password2 === '') {
            alert("Fill all the fields")
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Fill all the fields'
            });
            return;
        }

        if (password !== password2) {
            alert("Password does not match")
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Password does not match'
            });
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, correo, password);
            navigate('/');
        } catch (error) {
            cambiarEstadoAlerta(true);
             

            let mensaje;
            switch (error.code) {
                case 'auth/weak-password':
                    mensaje = 'Password has to be at least 6 characters'
                    alert("Password has to be at least 6 characters")
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                    alert("There is an account with this email")
                    break;
                case 'auth/invalid-email':
                    mensaje = 'Invalid email'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                    break;
            }

            cambiarAlerta({ tipo: 'error', mensaje: mensaje });
        }


    }
  

    return (
        <><div class="CajaLogin">
            <div class="form-floating mb-3">
                <div class="form-floating">
                    <div class="DatosLogin">


                        <form onSubmit={handleSubmit}>
                            <p>
                                <h2>Email</h2>

                                <input type="email"
                                    name="email"
                                    placeholder="Correo Electrónico"
                                    value={correo}
                                    onChange={handleChange}
                                    class="form-control" />
                            </p>

                            <h2>
                                Password
                            </h2>
                            <p>
                                <div class="buttonIn">


                                    <input type={shown ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={handleChange}
                                        class="form-control input-prueba" 
                                        maxlength="16"/>
                                    <button onClick={switchShown} type="button" class="btn btn-secondary boton-prueba"> {shown ? <FaEyeSlash /> : <FaEye />}</button>
                                </div>
                            </p>
                            <h2>
                                Verify password
                            </h2>
                            <p>
                                <div class="buttonIn">


                                    <input
                                        name="password2"
                                        placeholder="Repetir la contraseña"
                                        value={password2}
                                        onChange={handleChange}
                                        type={shown2 ? 'text' : 'password'}
                                        class="form-control input-prueba" 
                                        maxlength="16"/
                                    >
                                    <button onClick={switchShown2} type="button" class="btn btn-secondary boton-prueba"> {shown2 ? <FaEyeSlash /> : <FaEye />}</button>
                                </div>
                            </p>

                            <p>
                                <button primario type="submit" class="btn btn-outline-primary">Sign up</button>
                            </p>



                        </form>
                        <button class="btn btn-outline-light" onClick={()=>window.location.href = '/login'}>
                           
                                Go to log in
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Registro