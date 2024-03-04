import React from 'react';
import './Eliminados.css';

const Eliminados = () => {
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
        <div className="user-management-item-status">Eliminado el 24 Enero 2024</div>
      </div>
      <div className="user-management-item-info">
        <div className="user-management-item-name">Martin Estrada</div>
        <div className="user-management-item-status">Eliminado el 14 Noviembre 2023</div>
      </div>
    </div>
  );
};

export default Eliminados;
