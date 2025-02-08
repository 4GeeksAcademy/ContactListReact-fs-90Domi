import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Card } from "../component/card";


import "../../styles/demo.css";


export const ContactosAgenda = () => {

	const { store, actions } = useContext(Context);
	const contactos = store.listContacts


	return (
		<div className="container-fluid overflow-y-scroll" id="centro">

			{contactos.length !== 0 ? (
				<div>
					<ul className="list-group">
						
							<div className="text-center">
								<h3>Tu contactos</h3>
								{contactos?.map((contacto, index) => (
									<Card key={index} contacto={contacto} />
								))}
							</div>
						
					</ul>
				</div>

			) : (
				<div className="container">
					<div className="text-center">
						<h1>Actualmente no tienes contactos</h1>
						<h4>Por favor, introduce los datos de tu primer contacto</h4>
						

					</div>

				</div>


			)
			}</div>
	);

}
