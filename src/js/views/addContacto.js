import React, { useState, useEffect, useContext } from "react";


import { Context } from "../store/appContext";
import { AñadContacto } from "../component/añadContacto";

// import "../../styles/demo.css";

export const AddContacto = () => {
  const { store, actions } = useContext(Context);
  console.log("estas en vista addContactos")
  return (


    <div className="d-flex justify-content-center">
      <div className="container">
        <div className="text-center">
          
          <h4>Introduce los datos del contacto</h4>
          <div className="mt-1">
            <AñadContacto />
          </div>

        </div>

      </div>
    </div>

  )
}

