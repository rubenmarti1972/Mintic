import './MiPrimerComponente.css';
const MiPrimerComponente = () => {
    return (
        <>
            <h2>Mi primer componente</h2>
            <p>Esto es un párrafo para inventar</p>
            <p>Esto es un párrafo dentro de mi primer componente</p>
            <a href="http://google.com">Google</a>
            <h3>Formulario de Registro </h3>

            <form>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" pleceholder="Nombre" name="nombre" id="nombre" />
                <br />
                <label htmlFor="apellido">Apellido: </label>
                <input type="text" pleceholder="Apellido" name="apellido" id="apellido" />
                <br />

                <label htmlFor="email">   Email: </label>
                <input type="text" pleceholder="Email" name="email" id="email" />
                <br />

                <label htmlFor="Telefono">Teléfono: </label>
                <input type="number" pleceholder="Teléfono" name="telefono" id="telefono" />
                <br />
                <br />


                <button type="submit">Registrar</button>
            </form>
        </>

    );
};

export default MiPrimerComponente;
