
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from './Service';

const ModifyPatient = () => {
  const { dni } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    dni: '',
    name: '',
    surname: '',
    address: '',
    location: '',
    postalCode: '',
    telephone: ''
  });

  useEffect(() => {
    api.get(`/patients/${dni}`)
      .then(response => setPatient(response.data.patient))
      .catch(error => console.error('Error al obtener paciente por DNI:', error));
  }, [dni]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    api.put(`/patients/${dni}`, patient)
      .then(response => {
        console.log('Paciente actualizado:', response.data.patient);
        navigate('/tabla');
      })
      .catch(error => console.error('Error al actualizar paciente:', error));
  };
  
  return (
    <div className='form-box'>
      <h2>Modificar Paciente</h2>
      <form>
        <div className='modify-box'>
          <input type="text" name="dni" value={patient.dni} onChange={handleInputChange} />
          <label>DNI </label>
        </div>
        <div className='modify-box'>
          <input type="text" name="name" value={patient.name} onChange={handleInputChange} />
          <label>Nombre </label>
        </div>
        <div className='modify-box'>
          <input type="text" name="surname" value={patient.surname} onChange={handleInputChange} />
          <label>Apellido </label>
        </div>
        <div className='modify-box'>
          <input type="text" name="address" value={patient.address} onChange={handleInputChange} />
          <label>Dirección </label>
        </div>
        <div className='modify-box'>
          <input type="text" name="location" value={patient.location} onChange={handleInputChange} />
          <label>Localidad </label>
        </div>
        <div className='modify-box'>
          <input type="text" name="postalCode" value={patient.postalCode} onChange={handleInputChange} />
          <label>Código Postal </label>
        </div>
        <div className='modify-box'>
          <input type="text" name="telephone" value={patient.telephone} onChange={handleInputChange} />
          <label>Teléfono </label>
        </div>
        <button type="button" onClick={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          Modificar Paciente
        </button>
      </form>
    </div>
  );
};

export default ModifyPatient;