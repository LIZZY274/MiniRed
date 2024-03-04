import React from 'react';
import './Administrador.css'

const Directores = () => {
  return (
    <div className="user-management-container">
      <div className="title-container">
        <h2>Lista de usuarios Directores</h2>
        <div className="delete-icon">X</div>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Buscar..." />
        <button>Agregar</button>
      </div>
      <div className="user-info">
        <div className="user-name">Brandon Gomez</div>
        <div className="delete-icon">-</div>
      </div>
      <div className="user-info">
        <div className="user-name">Samuel Morales</div>
        <div className="delete-icon">-</div>
      </div>
    </div>
  );
};

export default Directores;
