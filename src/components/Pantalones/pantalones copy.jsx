import { collection, deleteDoc, doc, getDoc, increment, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from '../../firebase/firebase';
import './pantalones.css';


function Pantalones() {


    const [lista, setLista] = useState([])
    const [nombre, setNombre] = useState(document)
    const [numCars,setNumCars] = useState(0)


    useEffect(() => {
        onSnapshot(collection(db, "Pantalones"), (snapshot) => {
            const p = snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id };
            });
             
            setLista(p)
        });
        numeroItem()
    }, []);



    const Borrar = async (c) => {

        await deleteDoc(doc(db, "Pantalones", c))
    }




    const numeroItem = async () => {
        const contador = await getDoc(doc(db, "Cesta", "contador"));
        setNumCars(contador.data().number);
    };

    const agregarItem = async (c) => {
        const item = "item" + numCars;
        await setDoc(doc(db, "Cesta", item), {
            precio: c.precio,
            color: c.color,
            cantidad: c.cantidad,
            id:c.id
        });
        await updateDoc(doc(db, "Cesta", "contador"), { number: increment(1) });
        setNumCars(numCars + 1);
    };

    


    return (

        <>
            <div class="proyectar">


                {lista.map((c) => (
                    <div class="borde" key={c.id}>

                        <div > <h3> <b>{c.id}</b></h3> - {c.precio}€ y su color es {c.color}  </div>
                        <p>
                            <button onClick={() => Borrar(c.id)}>Borrar</button>
                            <button onClick={() => agregarItem(c)}>Añadir a la cesta</button>



                        </p>
                    </div>


                ))}
            </div>



        </>
    )
}

export default Pantalones;