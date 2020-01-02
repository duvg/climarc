import React, { useState } from 'react';

function Formulario ({datosConsulta}) {

    // state del componente

    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChange  = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    const consultarClima = e => {
        e.preventDefault();

        // pasar los datos busqueda al componente padre
        datosConsulta(busqueda);
    }

    return(
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input 
                    id="ciudad"
                    name="ciudad"
                    onChange={handleChange}
                    type="text"
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select name="pais" id="psia" onChange={handleChange}>
                    <option value="">Selecciona un pais</option>
                    <option value="CO">Colombia</option>
                    <option value="US">Estados Unidos</option>
                    <option value="AR">Argentina</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Búscar Clima"/>
            </div>
        </form>
    )
}

export default Formulario;