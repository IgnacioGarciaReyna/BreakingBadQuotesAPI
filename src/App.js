import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {
  //Agregamos async para que no se siga ejecutando el código hasta que se complete el await
  const consultarAPI = async () => {
    //Fetch retorna una promise
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    console.log(frase[0]);


    // otra forma de obtener la frase desde la promise que trae fetch
    // siempre que en consola una promise diga pending se accede con un .then a menos que uses await
    // const frase = api.then((respuesta) => respuesta.json());
    // frase.then((resultado) => console.log(resultado));
  };

  return (
    <Contenedor>
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
