
import React from 'react';
import { Link } from 'react-router-dom';
import iconHome from '../images/home-icon.gif';
import iconTable from '../images/table-icon.gif';
import iconAdd from '../images/add-icon.gif';
import iconModify from '../images/modify-icon.gif';

const Menu = () => {

  return (
    <div className="menu-box">
      <div className="menu">
        <ul>
          <li><Link to="/" className="menu-item"><img src={iconHome} alt="IconHome" /> Inicio</Link></li>
          <li><Link to="/tabla" className="menu-item"><img src={iconTable} alt="IconTable" /> Mostrar Tabla</Link></li>
          <li><Link to="/crear" className="menu-item"><img src={iconAdd} alt="IconAdd" /> Añadir Paciente</Link></li>
          <li><Link to="/tabla" className="menu-item"><img src={iconModify} alt="IconModify" /> Modificar Paciente</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;