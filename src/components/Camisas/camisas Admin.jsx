import { collection, deleteDoc, doc, getDoc, increment, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line,RiShirtFill } from "react-icons/ri";
import { db } from '../../firebase/firebase';
import './camisas.css';



function CamisasAdmin() {
    const [lista, setLista] = useState([])
    const [nombre, setNombre] = useState(document)
    const [numCars, setNumCars] = useState(0)
    useEffect(() => {
        onSnapshot(collection(db, "Camisas"), (snapshot) => {
            const p = snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id };
            });
           
            setLista(p)
        });
        numeroItem()
    }, []);

    const Borrar = async (c) => {

        await deleteDoc(doc(db, "Camisas", c))
    }


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
                            <div class="item-dividir" ><div><h3> <b>{c.id}</b> <RiShirtFill/></h3><h4>De color: <b>{c.color}</b></h4><h5><b>{c.precio}€</b></h5>
                            </div>
                                <div>
                                    <button class="btn btn-outline-danger" onClick={() => Borrar(c.id)}>Borrar <RiDeleteBin6Line className="basura-icon" /></button>

                                </div>

                            </div>

                        </div>

                    </div>


                ))}
            </div>

        </>
    )
}

export default CamisasAdmin;