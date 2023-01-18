import React, { useState } from 'react';
import './style.css';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Content from './components/Content';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/contact' },
];

export default function App() {
  // let pagina = 'About';
  const [pagina, setPagina] = useState(links[0].name);
  const [email, setEmail] = useState('placeholder@mail.com');

  const handleClickLink = (parametro) => {
    // alert(parametro);
    // alert('click en ' + {link.name});
    setPagina(parametro);
    console.log('la página actual es:', pagina);
  };

  const handleClickButton = (evento) => {
    console.log(evento.currentTarget.name);
  };

  return (
    <div>
      {/*<Header
        titulo="Hola mundo"
        descripcion="Jordan Walke prueba...."
      ></Header>*/}
      <h1>{pagina}</h1>
      <SideNav links={links} onRedir={handleClickLink} />
      {/*<Content />*/}
      <button onClick={handleClickButton} name="boton_test">
        test
      </button>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
      />
      <p>{email}</p>
    </div>
  );
}
