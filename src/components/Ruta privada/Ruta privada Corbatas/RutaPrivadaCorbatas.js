import React from 'react';
import { useAuth } from '../../../contextos/AuthContext'


import { Navigate } from 'react-router-dom';

const RutaPrivadaCorbatas = ({ children }) => {
	const { usuario } = useAuth();

	if (usuario) {
		let email = usuario.email
		
		if (usuario.email === "1@1.com") {
			
			return <Navigate replace to="/corbatasAdmin" />
		}
		if (usuario.email !=="1@1.com") {
			
			return children
		}

	}
	else {
		return <Navigate replace to='/corbatasM' />
	}





}

export default RutaPrivadaCorbatas;