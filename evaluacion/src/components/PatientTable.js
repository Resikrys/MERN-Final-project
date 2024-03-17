
import React, { useState, useEffect } from 'react';
import api from './Service';
import { useNavigate } from 'react-router-dom';

const PatientTable = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [searchDNI, setSearchDNI] = useState('');

  const handleModifyClick = (dni) => {
    navigate(`/modify/${dni}`);
  };

  const handleDeleteClick = (dni) => {
    const isConfirmed = window.confirm('¿Seguro que quieres eliminar a este paciente?');

    if (isConfirmed) {
      api.delete(`/patients/${dni}`)
        .then(() => {
          api.get('/patients')
            .then(response => {
              const responseData = response.data;
              if (Array.isArray(responseData.patients)) { //Caso normal: obtienes un array de pacientes
                setPatients(responseData.patients);
              } else if (responseData.patient) {
                setPatients([responseData.patient]); //Caso especial: Obtienes un/ningún paciente después de eliminar
              }
            })
            .catch(error => console.error('Error al obtener pacientes:', error));
        })
        .catch(error => console.error('Error al eliminar paciente:', error));
    }
  };

  //Obtener lista de pacientes (se cargará en la tabla)
  useEffect(() => { 
    api.get('/patients')
      .then(response => setPatients(response.data.patients)) 
      .catch(error => console.error('Error al obtener pacientes:', error));
  }, []);

  //Filtrar un paciente en la barra de búsqueda
  const handleSearch = () => { 
    api.get(`/patients/${searchDNI}`)
      .then(response => {
        console.log(response.data);
        setPatients(response.data.patient ? [response.data.patient] : []);
        navigate('/tabla');
      })
      .catch(error => console.error('Error al obtener paciente por DNI:', error));
  };

  return (
    <div className='table-box'>
      <h2>TABLA DE PACIENTES</h2>
      <input
        type="text"
        placeholder="Buscar por DNI"
        value={searchDNI}
        onChange={(e) => setSearchDNI(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <table>
        <thead>
          <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dirección</th>
            <th>Localidad</th>
            <th>Código Postal</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.dni} >
              <td>{patient.dni}</td>
              <td>{patient.name}</td>
              <td>{patient.surname}</td>
              <td>{patient.address}</td>
              <td>{patient.location}</td>
              <td>{patient.postalCode}</td>
              <td>{patient.telephone}</td>
              <td className='button-cell'>
                <button className='btn-modify' onClick={() => handleModifyClick(patient.dni)}>Modificar</button>
                <button className='btn-delete' onClick={() => handleDeleteClick(patient.dni)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;