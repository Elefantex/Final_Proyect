import React from 'react';
import { useAuth } from '../../../contextos/AuthContext'


import { Navigate } from 'react-router-dom';

const RutaPrivadaPantalones = ({ children }) => {
	const { usuario } = useAuth();

	if (usuario) {
		let email = usuario.email
		
		if (usuario.email === "1@1.com") {
			
			return <Navigate replace to="/pantalonesAdmin" />
		}
		if (usuario.email !=="1@1.com") {
			
			return children
		}

	}
	else {
		return <Navigate replace to='/pantalonesM' />
	}





}

export default RutaPrivadaPantalones;