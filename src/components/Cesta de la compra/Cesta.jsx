import { setDoc, doc, snapshot, onSnapshot, collection, query, where, updateDoc, deleteDoc, increment } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import './cesta.css'

import { AuthContext, useAuth } from "../../contextos/AuthContext";
import { async } from "@firebase/util";
import { FaTrash, FaPlus, FaMinus, FaWallet } from "react-icons/fa";

function Cesta() {
    const [lista, setLista] = useState([])
    const [final, setFinal] = useState("")
    const [nombre, setNombre] = useState(document)
    const [listaColor, setListaColor] = useState([])
    const [colores, setColores] = useState()
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
    }, []);


    const Borrar = async (c) => {

        await deleteDoc(doc(db, usuario.email, c))
    }


    async function disminuir(c) {

        await updateDoc(doc(db, usuario.email, c.id), { cantidad: increment(-1) })

    }
    async function aumentar(c) {
        await updateDoc(doc(db, usuario.email, c.id), { cantidad: increment(1) })
    }
    
    function Pagar() {
        
        window.location.href = "/pago"
    }

    // function Descuento(final) {
    //     let opcion = document.getElementById("Descuento").value
    //     let botonDescuento =document.getElementById("botonDescuento")

    //     if (opcion == "20descuento") {
    //         setFinal(((final) / 1.2).toFixed(2))
    //         botonDescuento.disabled=true

    //     }
    //     document.getElementById("Descuento").disabled=true


    // }
    // <div class="input-group mb-5 tamano-menor">
    //     <input type="Cupon" class="form-control" placeholder="Cupon descuento" id="Descuento" />
    //     <button className="btn btn-primary" id="botonDescuento" onClick={() => Descuento(final)}>Enviar</button>
    // </div>





    return (
        <>


            <h1>Basket:</h1>





            {lista.map((c) => (
                <div class="borde-cesta" key={c.id}>

                    <div > <h3> <b>{c.id}</b></h3> <h4> {c.precio}€ which colour is {c.color}. {c.cantidad} units. Total = {((c.precio) * (c.cantidad)).toFixed(2)}€</h4> </div>
                    <p>

                        <button class="btn" onClick={() => aumentar(c)}><FaPlus /></button>

                        {c.cantidad > 1 ?
                            <><button class="btn" onClick={() => disminuir(c)}><FaMinus /></button> </> :
                            <></>}
                        <button class="btn btn-danger" onClick={() => Borrar(c.id)}>Remove all units <FaTrash className="gray" /></button>



                    </p>

                </div>

            ))
            }
            <div>{listaColor.length == 0 ?
                <div><h1>You do not have any item in the shopping basket, start to buy :D
                  </h1>
                    <h2><a href="/">Shopping</a></h2></div> : <>
                    
                    <div><button class="btn btn-outline-danger" onClick={() => Pagar()}>Check out <FaWallet /></button></div></>
            }


            </div>


        </>
    )
}


export default Cesta

