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
import { FaHome, } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonSwimming, faSocks, faShirt, faUserTie, faGlasses } from '@fortawesome/free-solid-svg-icons'
import { RiDeleteBin6Line, RiShirtFill } from "react-icons/ri";
import { GiMonclerJacket, GiTrousers } from "react-icons/gi";
import { FaShoppingBasket } from "react-icons/fa";










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
            <div class="subtitulo">{usuario ? "Where you find clothes for everyday" : "Login to shopping"}

            </div>

          </a>




        </div>
        <div >

        </div>
        
        <div class="link">
       
          <a href="/" class="links2"><FaHome className='home-icon' /></a>
          

          {usuario ?
            (usuario.email == "1@1.com" ?
              <a href='/anadir' class="links">Admin</a>
              : <><a href='/perfil' class="links">Profile</a></>) :
            <></>
          }
          {usuario ? (usuario.email == "1@1.com" ? <></>
            : (numeroCesta === 0 ?
              <a href='/cesta' class="links5">Empty <FaShoppingBasket /></a>
              :
              <a href='/cesta' class="links5">Basket {final}</a>)) :
            <></>}
          {usuario == null ? <a href="/login" class="links3">Login</a> : <div class="links4"><button class="btn btn-primary btn-sm" onClick={cerrarSesion} >Log out</button></div>}

        </div>

      </div>
      <div class=" nav-bar horizontal">
        <a href="/banadores" class="round">Swimsuits <FontAwesomeIcon icon={faPersonSwimming}></FontAwesomeIcon></a>
        <a href="/calcetines" class="round">Socks <FontAwesomeIcon icon={faSocks}></FontAwesomeIcon></a>
        <a href="/camisas" class="round">Shirts <RiShirtFill /></a>
        <a href="/camisetas" class="round">T shirts <FontAwesomeIcon icon={faShirt}></FontAwesomeIcon></a>
        <a href="/chaquetas" class="round">Jackets <GiMonclerJacket /></a>
        <a href="/corbatas" class="round">Ties <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon></a>
        <a href="/gafas" class="round">Glasses <FontAwesomeIcon icon={faGlasses}></FontAwesomeIcon></a>
        <a href="/pantalones" class="round">Jeans <GiTrousers /></a>

      </div>

    </>

  )
}

export default Cabecera;