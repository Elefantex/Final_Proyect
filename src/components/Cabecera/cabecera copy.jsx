import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc, snapshot, onSnapshot, collection, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { AuthContext, useAuth } from "../../contextos/AuthContext";
import './cabecera.css'
import '../../bootstrap.css'
import { FaHome } from "react-icons/fa";







function Cabecera() {
  const navigate = useNavigate();
  const { usuario } = useAuth();


  const [numeroCesta, setNumeroCesta] = useState()
  const [final, setFinal] = useState()
  const [lista, setLista] = useState()


  useEffect(() => {

    if (usuario !== null) {

      onSnapshot(query(collection(db, usuario.email), where("color", "!=", "")), (snapshot) => {
        const p = snapshot.docs.map((documento) => {
          return { ...documento.data(), id: documento.id };
        });

        setLista(p)



        //  (p[0].cantidad)
        setNumeroCesta(p.length)


        let todo = 0
        for (let index = 0; index < p.length; index++) {
          todo += parseInt(p[index].cantidad)
          setFinal(todo)
        }


      }


      );
    }
    else {

      onSnapshot(query(collection(db, "cesta"), where("color", "!=", "")), (snapshot) => {
        const p = snapshot.docs.map((documento) => {
          return { ...documento.data(), id: documento.id };
        });

        setLista(p)



        setNumeroCesta(p.length)


        let todo = 0
        for (let index = 0; index < p.length; index++) {
          // (parseInt(p[index].cantidad))
          todo += parseInt(p[index].cantidad)
          setFinal(todo)
        }


      });
    }


  }, []);









  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {

    }
  }


  return (
    <>
      <div class="todo">
        <div class="todo2" >
          <a href="/" class="NoMostrar"> <div class="titulo" >Samuel Market
          </div>
            <div class="subtitulo">Donde encontraras toda la ropa para tu día a día</div>
          </a>


        </div>
        <div class="link">
          <div class="links2"><a href="/"><FaHome className='home-icon' /></a></div>

          {usuario ?
            (usuario.email == "1@1.com" ?
              <div class="links"><a href="/anadir">Admin</a></div> : <></>) :
            <></>
          }
          {usuario ? (usuario.email == "1@1.com" ?<></>
            :(numeroCesta === 0 ?
              <div class="links"><a href="/cesta">Cesta vacia</a></div> :
              <div class="links"><a href="/cesta">Items en la cesta {final}</a></div>)) :
            <></>}
          {usuario == null ? <div class="links3"><a href="/login">Login</a></div> : <div class="links4"><button class="btn btn-primary btn-sm" onClick={cerrarSesion} >Desconectar</button></div>}

        </div>

      </div>
      <div class="horizontal">
        <a href="/abrigos" class="round">Abrigos</a>
        <a href="/banadores" class="round">Bañadores</a>
        <a href="/calcetines" class="round">Calcetines</a>
        <a href="/camisas" class="round">Camisas</a>
        <a href="/camisetas" class="round">Camisetas</a>
        <a href="/chaquetas" class="round">Chaquetas</a>
        <a href="/corbatas" class="round">Corbatas</a>
        <a href="/pantalones" class="round">Pantalones</a>


      </div>



    </>

  )
}

export default Cabecera;