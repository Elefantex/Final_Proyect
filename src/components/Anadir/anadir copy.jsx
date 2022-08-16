import { collection, doc, onSnapshot, query, setDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from '../../firebase/firebase';



function Anadir() {
    const [pantalon, setPantalon] = useState("")
    const [precio, setPrecio] = useState("")
    const [lista, setLista] = useState([])
    const [color, setColor] = useState("")

    //setDoc crea lo que sea 
    const pantalones = async (e) => {
        e.preventDefault();
        await setDoc(doc(db, "Pantalones", pantalon), {
            precio: precio,
            color: color

        })
        setPrecio("");
        setPantalon("");
        setColor("");
    }
   


    //updateDoc actualiza lo que sea
    /*
    const pantalones = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, "Pantalones", pantalon), {
            precio: precio,
            color: color

        })
        setPrecio("");
        setPantalon("");
        setColor("");
    }
    */
    //Muestra la coleccion en tiempo real por color
    useEffect(() => {
        onSnapshot(query(collection(db, "Pantalones"), where("color", "!=", "")), (snapshot) => {
            const p = snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id };
            });
             (p)
            setLista(p)
        });
    }, []);

    //Muestra la coleccion en tiempo real
    useEffect(() => {
        onSnapshot(collection(db, "Pantalones"), (snapshot) => {
            const p = snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id };
            });
             (p)
            setLista(p)
        });
    }, []);

    return (lista.length > -1 && (
        <>
            <div class="CajaLogin">
                <div class="Datos">
                    <form action="" onSubmit={pantalones}>
                        <div>
                            <label for="nombre">Introduce el nombre:</label>
                            <input
                                placeholder="Inserte el nombre" value={pantalon} onChange={(e) => setPantalon(e.target.value)}
                            />
                        </div>
                        <div>
                            <label for="number">Introduce el precio:</label>
                            <input
                                placeholder="Inserte el precio" value={precio} onChange={(e) => setPrecio(e.target.value)} min="0" type="number" step=".01"
                            />
                        </div>
                        <div>
                            <label for="color">Introduce el color:</label>
                            <input
                                placeholder="Inserte el color" value={color} onChange={(e) => setColor(e.target.value)} type="text"
                            />
                        </div>
                        <div>
                            <label for="coleccion">Introduce la coleccion a la que añadir:</label>
                            <select id="coleccion" name="coleccion">

                                <option value="Nada" disabled selected>Seleccion una opcion</option>

                                <option value="camisetas" name="camisetas" id="camisetas">Camisetas</option>

                                <option value="pantalones" name="pantalones" id="pantalones">Pantalones</option>

                            </select>
                        </div>

                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div>
                {lista.map((c) => (
                    <div key={c.id}  > {c.id} y el precio es {c.precio} y su color es {c.color} </div>
                ))}
            </div>

        </>

    )

    )
}


export default Anadir