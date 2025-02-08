import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const navigate = useNavigate()
	const ids = parseInt(params.theid);

	const fichaCon = store.listContacts.find(contacto => contacto.id === ids);

	useEffect(() => {
		if (fichaCon) {
			setName(fichaCon.name || "");
			setPhone(fichaCon.phone || "");
			setEmail(fichaCon.email || "");
			setAddress(fichaCon.address || "");
		}
	}, [fichaCon]);

	const datosContacto = {
		id: ids,
		name: name,
		email: email,
		phone: phone,
		address: address
	}








	const guardaContacto = (e) => {
		e.preventDefault()
		if (!name || !phone || !email || !address) {
			alert("Por favor, complete todos los campos.");
			return;
		}

		actions.modificarContacto(datosContacto);
		navigate("/contactosAgenda");
	};


	return (
		<div className="jumbotron">
			<h1 className="display-4 text-center">Editando contacto: {fichaCon.name}</h1>
			<form className="container d-block" onSubmit={guardaContacto}>
				<div className="mb-3 ">
					<label className="form-label">Nombre completo</label>
					<input type="text" className="form-control" id="contactName" aria-describedby="comentarioNombre"
						onChange={(e) => { setName(e.target.value) }} value={name} required />
					<div id="comentarioNombre" className="form-text">Introduzca nombre/s y apellido/s.</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input type="email" className="form-control" id="contacEmail" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} required />
					<div id="emailHelp" className="form-text">Introducir solo un email.</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Telefono</label>
					<input type="number" className="form-control" id="contactTelefono" aria-describedby="comentarioTelefono" onChange={(e) => setPhone(e.target.value)} value={phone} required />
					<div id="comentarioTelefono" className="form-text">Si es necesario intruduzca codigo del pais .</div>
				</div>
				<div className="mb-3">
					<label className="form-label">Direccion</label>
					<input type="text" className="form-control" id="contactAdress" aria-describedby="comentarioDireccion" onChange={(e) => setAddress(e.target.value)} value={address} required />
					<div id="comentarioDireccion" className="form-text">Añada la direccion con el mayor número de datos.</div>
				</div>
				<div className="d-flex justify-content-center">


					<button type="submit" className="btn btn-primary btn-lg">Modificar</button>

					<Link to="/contactosAgenda">
						<span className="btn btn-primary btn-lg ms-3" href="#" role="button">
							Cancelar
						</span>
					</Link>
				</div>


			</form>

		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
