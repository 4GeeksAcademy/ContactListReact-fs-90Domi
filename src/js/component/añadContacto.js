import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate} from "react-router-dom";




export const AñadContacto = () => {
    const { store, actions } = useContext(Context);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate()


    const datosContacto = {
        name: name,
        phone: phone,
        email: email,
        address: address
    };
    console.log(datosContacto);


    const guardaContacto = (e) => {
        e.preventDefault()
        if (!name || !phone || !email || !address) {
            alert("Por favor, complete todos los campos.");
            return;
        }
    
        actions.añadirContacto(datosContacto);
        navigate("/contactosAgenda");
    };


    return (
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

               
                    <button type="submit" className="btn btn-primary btn-lg">Añadir</button>
                
                <Link to="/contactosAgenda">
                    <span className="btn btn-primary btn-lg ms-3" href="#" role="button">
                        Cancelar
                    </span>
                </Link>
                </div>


        </form>
    );
};