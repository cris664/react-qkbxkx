import React, { useState } from 'react';
import './style.css';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Content from './components/Content';
import Home from './components/Home';
import About from './components/About';
import FindRepository from './components/findRepositories';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Find Repository', path: '/findRepositories' },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/contact' },
];

export default function App() {
  // let pagina = 'About';
  const [pagina, setPagina] = useState(links[0].name);

  const handleClickLink = (parametro) => {
    // alert(parametro);
    // alert('click en ' + {link.name});
    setPagina(parametro);
    console.log('la página actual es:', pagina);
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
      {pagina === 'Home' && <Home />}
      {pagina === 'About' && <About />}
      {pagina === 'Find Repository' && <FindRepository />}
    </div>
  );
}
