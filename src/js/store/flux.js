

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listContacts: [],
			usuarioAgenda: "",
			contatoEditar: 0
		},
		actions: {
			
			
			crearAgenda: (nom) => {
					const metodo = {
					method: "POST",
					headers: {
                        'Content-Type': 'application/json'
                    },
				}
				fetch(`https://playground.4geeks.com/contact/agendas/${nom}`, metodo)
					.then((response) => {
						if (!response.ok) {
							if (response.status===400){
								getActions().cargarContactos();
								setStore({ "usuarioAgenda": usuario })

							}
							throw new Error({response});
							
							
						}
						return response.json();
					})
					.then((data) => {
						console.log("Agenda creada:", data);
						setStore({ usuarioAgenda: nom });
						console.log("Usuario Agenda actualizado: ", getStore().usuarioAgenda);
					})
					.catch((error) => console.error("Error en crearAgenda:", error));
			},

			añadirContacto: async (datos) => {
				const store = getStore();
				const nom = store.usuarioAgenda;
			
				console.log("Nombre de la agenda:", nom);
			
				const raw = JSON.stringify(datos);
				const metodo = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
				};
			
				await fetch(`https://playground.4geeks.com/contact/agendas/${nom}/contacts`, metodo)
					.then((response) => {
						if (!response.ok) throw new Error("Error al añadir contacto");
						return response.json();
					})
					.then((data) => {
						console.log("Contacto agregado:", data);
						getActions().addContactoAList(data);

					})
					.catch((error) => console.error("Error en añadirContacto:", error));
			},
			agregarUsuario: (usuario) => {

				setStore({ "usuarioAgenda": usuario })
				getActions().crearAgenda(usuario)

			},
			addContactoAList: (contact) => {
                const store = getStore();
                setStore({ ...store, listContacts: [...store.listContacts, contact] });
				console.log(store.listContacts);
				
            },
			modContactoAList: (modContacto) => {
                const store = getStore();
				const modidicacionContacto= store.listContacts.map(contact => 
					contact.id === modContacto.id ? modContacto : contact
				);
                setStore({ listContacts: modidicacionContacto });
				
			},
			
			cargarContactos: async () => {
				const store = getStore();
				const nom = store.usuarioAgenda;
			
				if (!nom) {
					console.log("No hay usuarioAgenda definida");
					return;
				}
			
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${nom}/contacts`);
					if (!response.ok) throw new Error("Error al cargar contactos");
			
					const data = await response.json();
					console.log(data.contacts);
					
					const result = data.contacts
					setStore({ ...store, listContacts: result });
					console.log("Contactos cargados:", result);
				} catch (error) {
					console.error("Error en loadContacts:", error);
				}
			},
			modificarContacto: async (datos) => {
				const store = getStore();
				const nom = store.usuarioAgenda;
				
				console.log("Nombre de la agenda:", nom);
			
				const raw = JSON.stringify(datos);
				const metodo = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: raw,
				};
			
				await fetch(`https://playground.4geeks.com/contact/agendas/${nom}/contacts/${datos.id}`, metodo)
					.then((response) => {
						if (!response.ok) throw new Error("Error al añadir contacto");
						return response.json();
					})
					.then((data) => {
						console.log("Contacto EDITADO:", data);
						getActions().cargarContactos();

					})
					.catch((error) => console.error("Error en añadirContacto:", error));
			},
			eliminarContacto: async (datos)=>{
				const store = getStore();
				const nom = store.usuarioAgenda;
				console.log(datos);
				

				const metodo = {
					method: "DELETE",
									
				};

				await fetch(`https://playground.4geeks.com/contact/agendas/${nom}/contacts/${datos}`, metodo)
				.then((response) => {
					if (!response.ok) throw new Error("Error al eliminar contacto");
					
				})
				.then((data) => {
					console.log("Contacto ELIMINADO", data);
					getActions().cargarContactos();

				})
				.catch((error) => console.error("Error en DELETE contacto:", error));

			}
			
		}
	}
	// 		}
	// 	};
};

export default getState;
