import { setDoc, doc, snapshot, onSnapshot, collection, query, where, updateDoc, deleteDoc, getDoc, increment } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import './gafas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses} from '@fortawesome/free-solid-svg-icons'


function AbrigosSinRegistrar() {
    const [lista, setLista] = useState([])
    const [nombre, setNombre] = useState(document)
    const [numCars, setNumCars] = useState(0)
    useEffect(() => {
        onSnapshot(collection(db, "Gafas"), (snapshot) => {
            const p = snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id };
            });
            
            setLista(p)
        });
        numeroItem()
    }, []);
    const Borrar = async (c) => {

        await deleteDoc(doc(db, "Gafas", c))
    }


    const numeroItem = async () => {
        const contador = await getDoc(doc(db, "Cesta", "contador"));
        setNumCars(contador.data().number);
    };


    const agregarItem = async (c) => {

        const nombreItem = c.id
        const existeItem = await getDoc(doc(db, "Cesta", nombreItem));
        if (existeItem.exists()) {
            
            await updateDoc(doc(db, "Cesta", nombreItem), { cantidad: increment(1) })
        } else {
            await setDoc(doc(db, "Cesta", nombreItem), {
                precio: c.precio,
                color: c.color,
                cantidad: 1,
                id: c.id
            });

           
        }


        const quantity = await getDoc(doc(db, "Cesta", c.id))
         (quantity.data().cantidad)
        const quantityCesta = quantity.data().cantidad


        const item = "item" + numCars;

        await updateDoc(doc(db, "Cesta", "contador"), { number: increment(1) });
        setNumCars(numCars + 1);
    };

    const cestaDeLaCompra = async (c) => {

       
        await setDoc(doc(db, "Cesta", "contador"), {

            precio: c.precio,
            color: c.color,
            cantidad: c.cantidad

        })


         (c.id)


    }

    return (

        <>
            <div class="proyectar">
                {lista.map((c) => (
                    <div class="borde" key={c.id}>
                        <div>
                            <div class="item-dividir" ><div><h3> <b>{c.id}</b> <FontAwesomeIcon icon={faGlasses}></FontAwesomeIcon></h3><h4>De color: <b>{c.color}</b></h4><h5><b>{c.precio}€</b></h5>
                            </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default AbrigosSinRegistrar;