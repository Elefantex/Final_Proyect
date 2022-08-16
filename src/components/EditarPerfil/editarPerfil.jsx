import { setDoc, doc, snapshot, onSnapshot, collection, query, where, updateDoc, deleteDoc, increment } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import './editarPerfil.css'

import { AuthContext, useAuth } from "../../contextos/AuthContext";
import { async } from "@firebase/util";
import { FaTrash, FaPlus, FaMinus, FaWallet } from "react-icons/fa";

function EditarPerfil() {
    const { usuario } = useAuth();
    const [pantalon, setPantalon] = useState("")
    const [precio, setPrecio] = useState("")
    const [lista, setLista] = useState([])
    const [color, setColor] = useState("")
    const [final, setFinal] = useState("")
    const [lista2, setLista2] = useState([])
    const [listaColor, setListaColor] = useState([])
    const [cantidad, setCantidad] = useState("")
    const [telefono, setTelefono] = useState("")
    const [introducirColeccion, setIntroducirColeccion] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [pais, setPais] = useState("")
    const [profile, setProfile] = useState("")
    

    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [zipcode, setZipCode] = useState("")
    const [direccionPostal, setDireccionPostal] = useState("")
    useEffect(() => {


        onSnapshot(query(collection(db, usuario.email), where("color", "!=", "")), (snapshot) => {
            const p = snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id };
            });

            setLista(p)

            setListaColor(p)




            let todo = 0
            for (let index = 0; index < p.length; index++) {
                //(parseInt(p[index].precio))
                todo += (p[index].precio * p[index].cantidad)
                setFinal(todo.toFixed(2))
            }




        });
        onSnapshot(collection(db, usuario.email + "profile"), (snapshot) => {
            const q = snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id };
            });

            setLista2(q)
        });
    }, []);



    const EnviarPerfil = async (e) => {

        let val3 = usuario.email + "profile"


        if (val3 == "Nada") {
            alert("Por favor selecciona una categoria")

        }
        else {
            e.preventDefault()
            await setDoc(doc(db, val3, val3), {
                nombre: nombre,
                apellidos: apellidos,
                direccionPostal: direccionPostal,
                zipcode: zipcode,
                ciudad: ciudad,
                pais: pais,
                telefono: telefono
            })
            setNombre("")
            setApellidos("");
            setDireccionPostal("");
            setZipCode("");
            setCiudad("");
            setPais("");
            setTelefono("");
            window.location.href = "/perfil"
        }
    }
    return (
        <div class="CajaLogin">
            <div class="form-floating mb-3">
                <div class="form-floating">
                    <div class="DatosLogin">
                        <form action="" onSubmit={EnviarPerfil}>
                            <div>
                                <label for="nombre" >Insert your name:</label>
                                <input
                                    placeholder="Inserte el nombre" class="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div>
                                <label for="number">Inser your surname:</label>
                                <input
                                    placeholder="Introduce tus apellidos" class="form-control" value={apellidos} onChange={(e) => setApellidos(e.target.value)}
                                />
                            </div>
                            <div>
                                <label for="color">Insert address</label>
                                <input
                                    placeholder="Introduce tu direccion postal" class="form-control" value={direccionPostal} onChange={(e) => setDireccionPostal(e.target.value)} type="text"
                                />
                            </div>
                            <div>
                                <label for="color">Insert Eircode</label>
                                <input
                                    placeholder="Introduce tu codigo postal" class="form-control" value={zipcode} onChange={(e) => setZipCode(e.target.value)} type="text"
                                />
                            </div>
                            <div>
                                <label for="color">Inser the city</label>
                                <input
                                    placeholder="Introduce tu ciudad" class="form-control" value={ciudad} onChange={(e) => setCiudad(e.target.value)} type="text"
                                />
                            </div>
                            <div>
                                <label for="color">Insert the country</label>
                                <input
                                    placeholder="Introduce el pais" class="form-control" value={pais} onChange={(e) => setPais(e.target.value)} type="text"
                                />
                            </div>
                            <div>
                                <label for="number">Insert the telephone number</label>
                                <input
                                    placeholder="Inserte el telefono" type="tel" id="phone" name="phone" class="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)}
                                />
                            </div>



                            <button type="submit" class="btn btn-outline-light" >Upload to your profile</button>

                        </form>
                        <button  onClick={() => window.location.href = "/perfil"} class="btn btn-outline-light">Go back</button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default EditarPerfil;