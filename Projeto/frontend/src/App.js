import { useState } from 'react';
import React from 'react'
import './assets/app.css';

function App() {

const [name, setname] = useState('')

function aoEnviar (event) {
  event.preventDefault()
  const nome = document.querySelector('input[name="nome"]').value
  setname(nome)
}

  return (
    <div className="App">

      <form>
        <label>Nome:</label>
        <input type="text" name="nome" />
        <button onClick={aoEnviar}>Enviar</button>
      </form>
        {name && <p>Olá, {name}</p>}
    </div>
  );
}

export default App;
