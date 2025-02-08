
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let propietario = store.usuarioAgenda
	let activo= true
	if (propietario === "") {
		 propietario = "desconocido";
		 activo = false
		 }
	let cantidadContactos = store.listContacts.length

	return (
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between sticky-top">
			<div className="w-auto">
				<h1>Agenda de {propietario} </h1>
			</div>
			<div className="ml-auto d-flex justify-content-center">
				<div className="mt-3 me-3">
					<h6>Nº contactos: {cantidadContactos}</h6>
					</div>

				<div className="d-flex justify-content-between">
				

					<Link style={{pointerEvents: activo === true ? '' : 'none'}} to="/addContacto">
						<button className="btn btn-success btn-lg" href="#" >
							Añadir Contacto
						</button>
					</Link>
					
				</div>

			</div>
		</nav>
		</div>
	);
};
