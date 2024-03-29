import { collection, deleteDoc, doc, getDoc, increment, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useAuth } from "../../contextos/AuthContext";
import { db } from '../../firebase/firebase';
import './bañadores.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonSwimming} from '@fortawesome/free-solid-svg-icons'


function BanadoresRegistrado() {
    const { usuario } = useAuth();
    
    const [lista, setLista] = useState([])
    const [nombre, setNombre] = useState(document)
    const [numCars, setNumCars] = useState(0)
    useEffect(() => {
        onSnapshot(collection(db, "Bañadores"), (snapshot) => {
            const p = snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id };
            });
            
            setLista(p)
        });
        numeroItem()
    }, []);
    const Borrar = async (c) => {

        await deleteDoc(doc(db, "Bañadores", c))
    }


    const numeroItem = async () => {
        const contador = await getDoc(doc(db, usuario.email, "contador"));
        setNumCars(contador.data().number);
    };


    const agregarItem = async (c) => {

        const nombreItem = c.id
        const existeItem = await getDoc(doc(db, usuario.email, nombreItem));
        if (existeItem.exists()) {
           
            await updateDoc(doc(db, usuario.email, nombreItem), { cantidad: increment(1) })
        } else {
            await setDoc(doc(db, usuario.email, nombreItem), {
                precio: c.precio,
                color: c.color,
                cantidad: 1,
                id: c.id
            });

           
        }


        const quantity = await getDoc(doc(db, usuario.email, c.id))
         (quantity.data().cantidad)
        const quantityCesta = quantity.data().cantidad


        const item = "item" + numCars;

        await updateDoc(doc(db, usuario.email, "contador"), { number: increment(1) });
        setNumCars(numCars + 1);
    };

   

    return (

        <>
            <div class="proyectar">


                {lista.map((c) => (
                    <div class="borde" key={c.id}>
                        <div>
                            <div class="item-dividir" ><div><h3> <b>{c.id}</b> <FontAwesomeIcon icon={faPersonSwimming}></FontAwesomeIcon></h3><h4>Colour: <b>{c.color}</b></h4><h5><b>{c.precio}€</b></h5>
                            </div>
                                <div>
                                    <button onClick={() => agregarItem(c)} class="btn btn-primary"><h5 class="centrar">Add to the basket <FaShoppingBasket className="green" /></h5></button>
                                </div>

                            </div>

                        </div>

                    </div>


                ))}
            </div>

        </>
    )
}

export default BanadoresRegistrado;