import { collection, deleteDoc, doc, getDoc, increment, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from '../../firebase/firebase';
import './pantalones.css';
import { GiTrousers } from "react-icons/gi";


function PantalonesSinRegistrar() {


    const [lista, setLista] = useState([])
    const [nombre, setNombre] = useState(document)
    const [numCars, setNumCars] = useState(0)


    useEffect(() => {
        onSnapshot(collection(db, "Pantalones"), (snapshot) => {
            const p = snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id };
            });
           
            setLista(p)
        });
        numeroItem()
    }, []);



   

    const numeroItem = async () => {
        const contador = await getDoc(doc(db, "Cesta", "contador"));
        setNumCars(contador.data().number);
    };





    return (

        <>
            <div class="proyectar">
                {lista.map((c) => (
                    <div class="borde" key={c.id}>
                        <div>
                            <div class="item-dividir" ><div><h3> <b>{c.id}</b> <GiTrousers/></h3><h4>De color: <b>{c.color}</b></h4><h5><b>{c.precio}€</b></h5>
                            </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </>
    )
}

export default PantalonesSinRegistrar;