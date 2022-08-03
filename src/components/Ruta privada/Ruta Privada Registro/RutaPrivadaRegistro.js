import React from 'react';
import { useAuth } from '../../../contextos/AuthContext'


import { Navigate } from 'react-router-dom';

const RutaPrivadaRegistro = ({ children }) => {
	const { usuario } = useAuth();

	if (usuario) {
		let email = usuario.email
		
		if (usuario.email === "1@1.com") {
			
			return <Navigate replace to='/' />
		}
		if (usuario.email !=="1@1.com") {
			
			return <Navigate replace to='/' />
		}

	}
	else {
		return  children
	}





}

export default RutaPrivadaRegistro;