import React from 'react';
import {auth} from '../../firebase/firebase';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const BotonCerrarSesion = () => {
	const navigate = useNavigate();

	const cerrarSesion = async() => {
		try {
			await signOut(auth);
			navigate('/login');
		} catch(error){
			
		}
	}

	return (
		<button onClick={cerrarSesion}> </button>
		
	);
}
 
export default BotonCerrarSesion;