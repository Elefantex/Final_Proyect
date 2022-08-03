import React from 'react';
import { useAuth } from '../../../contextos/AuthContext'

import { Navigate } from 'react-router-dom';

const RutaPrivadaCalcetines = ({ children }) => {
	const { usuario } = useAuth();

	if (usuario) {
		let email = usuario.email
		
		if (usuario.email === "1@1.com") {
			
			return <Navigate replace to="/calcetinesAdmin" />
		}
		if (usuario.email !=="1@1.com") {
			
			return children
		}

	}
	else {
		return <Navigate replace to='/calcetinesM' />
	}





}

export default RutaPrivadaCalcetines;