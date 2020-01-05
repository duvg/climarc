import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {

  // state principal 
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {
    // prevenir la ejecucion
    if(ciudad === '') return;

    //consulta a la API
  const consultaApi = async () => {

    const appID = '922baa811bc2740d30d4590468558ec7';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    // fetch
    const respuesta = await fetch(url);


    const resultado = await respuesta.json();


    guardarResultado(resultado);
  }


    consultaApi();
  }, [ciudad, pais])

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
  } else if (resultado.cod === '404') {
    componente = <Error mensaje="La ciudad no existen en nuestro registro" />
  } else {
    // mostrar los datos del clima
    componente = <Clima 
                  resultado={resultado}
                />;
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
