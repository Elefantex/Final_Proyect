import { setDoc, doc, snapshot, onSnapshot, collection, query, where, updateDoc, deleteDoc, increment } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import './pago.css'


import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

import { AuthContext, useAuth } from "../../contextos/AuthContext";
import { async } from "@firebase/util";
import { FaTrash, FaPlus, FaMinus, FaWallet } from "react-icons/fa";

function Pagar() {
    const [lista, setLista] = useState([])
    const [lista2, setLista2] = useState([])
    const [final, setFinal] = useState("")

    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [listaColor, setListaColor] = useState([])
    const [colores, setColores] = useState()
    const [direccion1, setDireccion1] = useState("")
    const [pantalon, setPantalon] = useState("")
    const [precio, setPrecio] = useState("")
    let [bool, setBool] = useState(true)

    const [color, setColor] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [telefono, setTelefono] = useState("")
    const [introducirColeccion, setIntroducirColeccion] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [pais, setPais] = useState("")
    const [profile, setProfile] = useState("")


    const [zipcode, setZipCode] = useState("")
    const [direccionPostal, setDireccionPostal] = useState("")
    const { usuario } = useAuth();

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




    function Descuento(final) {
        let opcion = document.getElementById("Descuento").value
        let botonDescuento = document.getElementById("botonDescuento")


        if (opcion === "20descuento") {
            setFinal(((final) / 1.2).toFixed(2))
            botonDescuento.disabled = true
            document.getElementById("Descuento").disabled = true
            setBool(!bool)

        }
        else {
            alert("Introduce un cupon valido")
        }

    }
    const Pagar2 = async (listaColor) => {
        let todoColor = 0

        for (let index = 0; index < listaColor.length; index++) {

            await deleteDoc(doc(db, usuario.email, listaColor[index].id))

            setColores(todoColor)
        }


        alert("Muchas gracias por la compra")
        window.location.href = '/'



    }



    return (
        <>


            {lista2.length == 0
                ? <>aPor favor completa tu informacion de perfil</>
                : <>12332</>}

                
            <div class="separar">
                <div>

                    {lista2.map((c) => (
                        <div key={c.id} >
                            <h2>
                                <div class="form-control espacio-izquierda">

                                    <div class="">
                                        <div class="espacio">
                                            <h2>Datos de envio</h2>
                                        </div>
                                        <div >
                                            <b>Nombre:
                                            </b>
                                            <EditText
                                                name='textbox3'
                                                defaultValue={c.nombre}
                                                editButtonProps={{ style: { marginLeft: '10px' } }}
                                                showEditButton
                                            />
                                        </div>
                                        <div >
                                            <b>Apellidos:
                                            </b>
                                            <EditText
                                                name='textbox3'
                                                defaultValue={c.apellidos}
                                                editButtonProps={{ style: { marginLeft: '10px' } }}
                                                showEditButton
                                            />
                                        </div>
                                        <div >
                                            <b>Direccion postal:
                                            </b>
                                            <EditText
                                                name='textbox3'
                                                defaultValue={c.direccionPostal}
                                                editButtonProps={{ style: { marginLeft: '10px' } }}
                                                showEditButton
                                            />
                                        </div>
                                        <div >
                                            <b>Pais:
                                            </b>
                                            <EditText
                                                name='textbox3'
                                                defaultValue={c.pais}
                                                editButtonProps={{ style: { marginLeft: '10px' } }}
                                                showEditButton
                                            />
                                        </div>
                                        <div >
                                            <b>Ciudad:
                                            </b>
                                            <EditText
                                                name='textbox3'
                                                defaultValue={c.ciudad}
                                                editButtonProps={{ style: { marginLeft: '10px' } }}
                                                showEditButton
                                            />
                                        </div>
                                        <div>
                                            <b>Codigo postal:
                                            </b>
                                            <EditText
                                                name='textbox3'
                                                defaultValue={c.zipcode}
                                                editButtonProps={{ style: { marginLeft: '10px' } }}
                                                showEditButton
                                            />
                                        </div>


                                        <div >
                                            <b>Telefono:
                                            </b>
                                            <div>
                                                <EditText
                                                    name='textbox3'
                                                    defaultValue={c.telefono}
                                                    editButtonProps={{ style: { marginLeft: '10px' } }}
                                                    showEditButton
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </h2>

                        </div>
                    ))}
                </div>


                <div class="separar-pago">
                    <div> <h2><b>Total {final}€</b></h2><p>

                        <div>
                            {
                                bool ? <></> : <h2>Descuento: -{(final * 0.2).toFixed(2)}€</h2>
                            }

                        </div>
                        <button class="btn btn-outline-danger" onClick={() => Pagar2(listaColor)}>Pagar todo <FaWallet /></button></p></div>
                    <div class="input-group mb-5 tamano-menor">
                        <input type="Cupon" class="form-control" placeholder="Cupon descuento" id="Descuento" />
                        <button className="btn btn-primary" id="botonDescuento" onClick={() => Descuento(final)}>Enviar</button>


                    </div>

                </div>


            </div>



        </>
    )
}

export default Pagar;