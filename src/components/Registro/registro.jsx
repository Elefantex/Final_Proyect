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
            alert("Por favor ingresa un correo electronico valido")
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Por favor ingresa un correo electrónico valido'
            });
            return;
        }

        if (correo === '' || password === '' || password2 === '') {
            alert("Por favor rellena todos los datos")
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Por favor rellena todos los datos'
            });
            return;
        }

        if (password !== password2) {
            alert("Contraseñas diferentes")
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Las contraseñas no son iguales'
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
                    mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
                    alert("La contraseña tiene que tener más de 6 caracteres")
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                    alert("Ya existe una cuenta con el correo electrónico proporcionado")
                    break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electrónico no es válido.'
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
                                <h2>Correo Electronico</h2>

                                <input type="email"
                                    name="email"
                                    placeholder="Correo Electrónico"
                                    value={correo}
                                    onChange={handleChange}
                                    class="form-control" />
                            </p>

                            <h2>
                                Contraseña
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
                                Verificar contraseña
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
                                <button primario type="submit" class="btn btn-outline-primary">Registrar</button>
                            </p>



                        </form>
                        <button class="btn btn-outline-light">
                            <Link to="/login">
                                Acceder a login
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Registro