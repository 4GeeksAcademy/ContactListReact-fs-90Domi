import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




export const Card = ({ contacto }) => {
	const { store, actions } = useContext(Context);



	console.log();

	const elimContacto = (datos) => {
		console.log(datos);
		actions.eliminarContacto(datos);


	}



	return (

		<div className="h-100">
			<div className="ml-auto d-flex justify-content-center">
				<div className="card mb-3 w-50">
					<div className="row g-1 d-flex justify-content-center">
						<div className="col-md-3">
							<img src="https://picsum.photos/150/150" className="rounded-circle mt-3 ms-3" alt="avatar de usuario" />
						</div>
						<div className="col-md-7 ">
							<div className="card-body text-start ms-4">
								<h4 className="card-title">{contacto.name}</h4>
								<p className="card-text"><i className="fa-solid fa-phone"></i>  Telefono: {contacto.phone}</p>
								<p className="card-text"><i className="fa-solid fa-map-location-dot"></i>  Direccion: {contacto.address}</p>
								<p className="card-text"><i className="fa-solid fa-at"></i>  Email: {contacto.email}</p>

							</div>
						</div>
						<div className="col-md-1 ms-1 text-end ">
							<div className="h-25 ms-3">
								<p role="button" className="fa-solid fa-trash text-danger border" data-bs-toggle="modal" data-bs-target={`#exampleModal-${contacto.id}`} ></p>
								<Link to={`/single/${contacto.id}`}>

									<p><i className="fa-solid fa-pen-to-square"></i></p>
								</Link>

							</div>
							{/* Modal  */}
							<div className="h-25 ms-3 d-flex">
								<div className="modal fade" id={`exampleModal-${contacto.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h1 className="modal-title fs-6" id="exampleModalLabel">¿Estas seguro que deseas eliminar este contacto?</h1>
												<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div className="modal-body fs-2 text-center">
												<p>{contacto.name}</p>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Deseo consevarlo</button>
												<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => elimContacto(contacto.id)}>Si, estoy seguro</button>
											</div>
										</div>
									</div>
								</div>
								{/* fin Modal */}
								

							</div>


						</div>

					</div>
				</div>
			</div>
		
		</div>
	);
};