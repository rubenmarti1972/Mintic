import React, { useState } from 'react'
import ComponenteConProps from './ComponenteConProps';
import './MiPrimerComponente.css';

const ComponenteConEstado = () => {

    const objForm = {
        name: "",
        lastname: "",
        email: "",
        phone: ""
    }

    const [form, setForm] = useState(objForm); 
    const [users, setUsers] = useState([]); 

    const handleForm = (e)=>{
        let temporalForm = {
            ...form, [e.target.name]: e.target.value
        }
        setForm(temporalForm);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        let array =[...users, form];
        setUsers(array);
       /* let info = `
            Nombre: ${form.name}
            Apellido: ${form.lastname}
            Email: ${form.email}
            Teléfono: ${form.phone}
        `;

        alert(info);*/
    }

    return (
        <>
            <h2>Componente con Estado</h2>
            <h5>Formulario desde componente con estado</h5>
            <form onSubmit={handleSubmit}>
                <input value={form.name} onChange={handleForm} type="text" placeholder="Nombre" name="name" id="name" />
                <br />
                <input value={form.lastname} onChange={handleForm} type="text" placeholder="Apellido" name="lastname" id="lastname" />
                <br />
                <input value={form.email} onChange={handleForm} type="email" placeholder="Email" name="email" id="email"></input>
                <br />
                <input value={form.phone} onChange={handleForm} type="tel" placeholder="Telefono" name="phone" id="phone"></input>
                <br/>
                {/**Crear inputs: Teléfono - Email */}
                <button type="submit">Registrar</button>
            </form>
            {/**Llamar a componente hijo y enviqrle propiedades */}
            <ComponenteConProps/>
        </>
    )
}

export default ComponenteConEstado;
