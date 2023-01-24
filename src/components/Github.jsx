import React, { useState, useEffect } from 'react';

export default function Github(props) {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    getGithubRepository();
    console.log('Use Effect');
  }, [props.usuario]);
  const getGithubRepository = () => {
    let url = 'https://api.github.com/users/' + props.usuario + '/repos';

    fetch(url)
      .then((response) => response.json())
      .then((datosRepositorio) => {
        if (Array.isArray(datosRepositorio)) {
          setRepositorios(datosRepositorio);
        } else {
          setRepositorios([{ id: 0, name: 'El usuario no existe en GitHub' }]);
        }
      });
  };

  return (
    <div>
      <h3>Repositorios: {props.usuario}</h3>
      {repositorios.length ? (
        <ul>
          {repositorios.map((repositorio) => {
            return <li key={repositorio.id}>{repositorio.name}</li>;
          })}
        </ul>
      ) : (
        <h4>No Hay repositorios para mostrar</h4>
      )}
    </div>
  );
}
