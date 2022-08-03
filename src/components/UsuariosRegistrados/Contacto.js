import React, {useState} from 'react';
import styled from 'styled-components';
import {db} from '../../firebase/firebase'
import {doc, deleteDoc, updateDoc} from 'firebase/firestore';

const Contacto = ({id, nombre, correo, Password}) => {
	const [editandoTarea, cambiarEditandoTarea] = useState(false);
	const [nuevoNombre, cambiarNuevoNombre] = useState(nombre);
	const [nuevoCorreo, cambiarNuevoCorreo] = useState(correo);


	const actualizarContacto = async(e) => {
		e.preventDefault();

		try {
			await updateDoc(doc(db, 'Usuarios', id), {
				Usuario: nuevoNombre,
				correo: nuevoCorreo
			});
		} catch(error){
			 ('Hubo un error al intentar actualizar el usuario')
			 (error);
		}

		cambiarEditandoTarea(false);
	}

	const eliminarContacto = async(id) => {
		try {
			await deleteDoc(doc(db, 'Usuarios', id));
		} catch(error){
			 ('Hubo un error al intentar eliminar el usuario')
			 (error);
		}
	}

	return (
		<ContenedorContacto>
			{editandoTarea ?
				<form action="" onSubmit={actualizarContacto}>
					<Input 
						type="text"
						name="nombre"
						value={nuevoNombre}
						onChange={(e) => cambiarNuevoNombre(e.target.value)}
						placeholder="Nombre"
					/>
					
					<Input 
						type="email"
						name="correo"
						value={nuevoCorreo}
						onChange={(e) => cambiarNuevoCorreo(e.target.value)}
						placeholder="Correo"
					/>
					<Boton type="submit">Actualizar</Boton>
				</form>
			:
				<>
					<Nombre>{nombre}</Nombre>
					<Correo>{correo}</Correo>
					
					
					
					<Boton onClick={() => cambiarEditandoTarea(!editandoTarea)}>Editar</Boton>
					<Boton onClick={() => eliminarContacto(id)}>Borrar</Boton>
				</>
			}
		</ContenedorContacto>
	);
}

const ContenedorContacto = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid rgba(0,0,0,.2);
`;

const Nombre = styled.p`
	font-weight: bold;
`;
 
const Correo = styled.p`
	font-style: italic;
	color: #6B6B6B;
	margin: 5px 0;
`;

const Boton = styled.button`
	padding: 5px 20px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	margin: 0px 2px;
	margin-bottom: 10px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;

const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;
 
export default Contacto;