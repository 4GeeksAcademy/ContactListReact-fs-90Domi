import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [nomUsu, setNomUsu] = useState();
	let numUsuario = nomUsu
	const enviarNomUsusario = (event) => {
		event.preventDefault()

		if (numUsuario !== undefined) {
			if (numUsuario !== " ") {
				actions.agregarUsuario(nomUsu)
			}
			else {
				alert("Por favor, debe introducir un nombre")
				
			}
		}
		else {
			alert("Por favor, debe introducir un nombre")
			
		}
	}

	useEffect(() => {
		if (store.usuarioAgenda !== "") {
			console.log("Verificando login:", store.usuarioAgenda);
			actions.cargarContactos();
			navigate("/contactosAgenda");
		}
	}, [store.usuarioAgenda])


	return (
		<div className="text-center mt-5">
			<h1>Creando agenda personalizada</h1>
			<form id="nombre" onSubmit={enviarNomUsusario}>
				<input type="text" className="mt-1 w-25" id="id1" placeholder="Inserte el nombre del propietario de la agenda"
					onChange={(e) => setNomUsu(e.target.value)} />

				<button type="submit">enviar</button>

			</form>

		</div>
	)
}
