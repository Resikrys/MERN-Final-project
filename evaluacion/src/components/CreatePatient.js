
import React, { useState } from 'react';
import api from './Service';
import { useNavigate } from 'react-router-dom';

const CreatePatient = () => {
  const navigate = useNavigate();
  const [newPatient, setNewPatient] = useState({
    dni: '',
    name: '',
    surname: '',
    address: '',
    location: '',
    postalCode: '',
    telephone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({
      ...newPatient,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    api.post('/patients', newPatient)
      .then(response => {
        console.log('Nuevo paciente creado:', response.data.patient);
        navigate('/tabla');
      })
      .catch(error => console.error('Error al crear paciente:', error));
  };

  return (
    <div className='form-box'>
      <h2>Añadir Paciente</h2>
      <form>
        <div className='data-box'>
          <input type="text" name="dni" value={newPatient.dni} onChange={handleInputChange}/>
          <label>DNI </label>
        </div>
        <div className='data-box'>
          <input type="text" name="name" value={newPatient.name} onChange={handleInputChange} />
          <label>Nombre </label>
        </div>
        <div className='data-box'>
          <input type="text" name="surname" value={newPatient.surname} onChange={handleInputChange} />
          <label>Apellido </label>
        </div>
        <div className='data-box'>
          <input type="text" name="address" value={newPatient.address} onChange={handleInputChange} />
          <label>Dirección </label>
        </div>
        <div className='data-box'>
          <input type="text" name="location" value={newPatient.location} onChange={handleInputChange} />
          <label>Localidad </label>
        </div>
        <div className='data-box'>
          <input type="text" name="postalCode" value={newPatient.postalCode} onChange={handleInputChange} />
          <label>Código Postal </label>
        </div>
        <div className='data-box'>
          <input type="text" name="telephone" value={newPatient.telephone} onChange={handleInputChange} />
          <label>Teléfono </label>
        </div>
        <button type="button" onClick={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          Crear Paciente
        </button>
      </form>
    </div>
  );
};

export default CreatePatient;
