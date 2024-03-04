import React from 'react';
import './Bloqueados.css';

const Bloqueados = () => {
  return (
    <div className="user-management-item-container">
      <div className="user-management-item-title-container">
        <h2>Usuarios Bloqueados</h2>
        <div className="user-management-item-delete-icon">X</div>
      </div>
      <div className="user-management-item-search-container">
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className="user-management-item-info">
        <div className="user-management-item-name">Brandon Gomez</div>
        <div className="user-management-item-action-buttons">
          <div className="user-management-item-delete-icon">-</div>
          <button className="user-management-item-block-button">Eliminar</button>
        </div>
      </div>
      <div className="user-management-item-info">
        <div className="user-management-item-name">Martin Estrada</div>
        <div className="user-management-item-action-buttons">
          <div className="user-management-item-delete-icon">-</div>
          <button className="user-management-item-block-button">Eliminar</button>
        </div>
      </div>
    </div>
  );
};


export default Bloqueados;
