import React from 'react';
import { useAuth } from '../../../contextos/AuthContext'


import { Navigate } from 'react-router-dom';

const RutaPrivadaCamisas = ({ children }) => {
	const { usuario } = useAuth();

	if (usuario) {
		let email = usuario.email
		
		if (usuario.email === "1@1.com") {
			
			return <Navigate replace to="/camisasAdmin" />
		}
		if (usuario.email !=="1@1.com") {
			
			return children
		}

	}
	else {
		return <Navigate replace to='/camisasM' />
	}





}

export default RutaPrivadaCamisas;