import { collection, doc, onSnapshot, query, setDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from '../../firebase/firebase';



function AnadirAdmin() {
    const [pantalon, setPantalon] = useState("")
    const [precio, setPrecio] = useState("")
    const [lista, setLista] = useState([])
    const [color, setColor] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [introducirColeccion, setIntroducirColeccion] = useState("")


    //setDoc crea lo que sea 
    const pantalones = async (e) => {
        let select = document.getElementById('coleccion');
        let val3 = select.options[select.selectedIndex].value;
         if(val3=="Nada"){
            alert("Por favor selecciona una categoria")
            setCantidad("")
            setPrecio("");
            setPantalon("");
            setColor("");
         }
         else{
            e.preventDefault()
            await setDoc(doc(db, val3, pantalon), {
                precio: precio,
                color: color
            })
            setCantidad("")
            setPrecio("");
            setPantalon("");
            setColor("");
         }
       
       


    }



   
   
    
    return (lista.length > -1 && (
        <>
            <div class="CajaLogin">
                <div class="form-floating mb-3">
                    <div class="form-floating">
                        <div class="DatosLogin">
                            <form action="" onSubmit={pantalones}>
                                <div>
                                    <label for="nombre">Insert the name:</label>
                                    <input
                                        placeholder="Inserte el nombre" class="form-control" value={pantalon} onChange={(e) => setPantalon(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label for="number">Inser the price</label>
                                    <input
                                        placeholder="Inserte el precio" class="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} min="0" type="number" step=".01"
                                    />
                                </div>
                                <div>
                                    <label for="color">Inser the colour</label>
                                    <input
                                        placeholder="Inserte el color" class="form-control" value={color} onChange={(e) => setColor(e.target.value)} type="text"
                                    />
                                </div>

                                <div>
                                    <label for="coleccion" class="form-label mt-4">Insert the collection</label>
                                    <select id="coleccion" class="form-select" name="coleccion">

                                        <option value="Nada" disabled selected>Choose an option</option>

                                        <option value="Bañadores" name="Bañadores" id="Bañadores">Swimsuits</option>

                                        <option value="Calcetines" name="Calcetines" id="Calcetines">Socks</option>

                                        <option value="Camisas" name="Camisas" id="Camisas">Shirts</option>

                                        <option value="Camisetas" name="Camisetas" id="Camisetas">T shirts</option>

                                        <option value="Chaquetas" name="Chaquetas" id="Chaquetas">Jackets</option>

                                        <option value="Corbatas" name="Corbatas" id="Corbatas">Ties</option>

                                        <option value="Gafas" name="Gafas" id="Gafas">Glasses</option>

                                        <option value="Pantalones" name="Pantalones" id="Pantalones">Jeans</option>

                                    </select>
                                </div>
                                
                                <button type="submit" class="btn btn-outline-light">Upload to database</button>

                            </form>
                            
                        </div>
                        
                    </div>
                   
                </div>
                
            </div>


        </>

    )

    )
}


export default AnadirAdmin