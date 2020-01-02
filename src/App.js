import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';

function App() {

  // state principal 
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);

  const datosConsulta = datos => {
    // Validar los campos
    if(datos.ciudad === '' || datos.pais === '') {
      guardarError(true);
      return;
    }

    // si existen agregar al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  // Cargar componente de error condiconalmente
  let componente;
  if (error) {
    // mostrar componente de error
    componente = <Error mensaje="Los campos son obligatorios" />
  } else {
    // mostrar los datos del clima
    componente = null;
  }

  return (
    <div className="App">
      <Header 
        titulo='Clima con React Hooks'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta={datosConsulta}
              />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
