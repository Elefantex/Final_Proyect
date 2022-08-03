import React from 'react';
import { useAuth } from '../../../contextos/AuthContext'


import { Navigate } from 'react-router-dom';

const RutaPrivadaAnadirAdmin = ({ children }) => {
	const { usuario } = useAuth();

	if (usuario) {
		let email = usuario.email
		
		if (usuario.email === "1@1.com") {
			
			return children
		}
		if (usuario.email !=="1@1.com") {
			
			return <Navigate replace to='/anadir' />
		}

	}
	else {
		return <Navigate replace to='/anadirM' />
	}





}

export default RutaPrivadaAnadirAdmin;