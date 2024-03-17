//Array pacientes + operaciones CRUD
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

let patients = [];

//Middleware para comprobar que no falta ningún campo --> añadir en put y post
const validateFields = (req, res, next) => {
    const {dni, name, surname, address, location, postalCode, telephone} = req.body;
    if(!dni || !name || !surname || !address || !location || !postalCode || !telephone) {
        return res.status(400).json({
            message: 'Es necesario rellenar todos los campos'
        })
    }
    next();
}

// Middleware para comprobar que el DNI introducido no está repetido --> añadir en put y post
const validateDni = (req, res, next) => {
    const { dni } = req.body;
    const isDniRepeated = patients.some(patient => patient.dni === dni);
    if (isDniRepeated) {
      return res.status(400).json({
        message: 'Este DNI ya ha sido introducido'
      });
    }
    next();
  };

// GET: Obtener todos los pacientes
router.get('/', (req, res) => {
    res.status(200).json({ patients });
});

// GET: Obtener paciente por DNI
router.get('/:dni', (req, res) => {
    const patient = patients.find(p => p.dni === req.params.dni);
    if (patient) {
        res.status(200).json({ patient });
    } else {
        res.status(404).json({ message: 'Paciente no encontrado' });
    }
});

// POST: Agregar nuevo paciente
router.post('/', validateFields, validateDni, (req, res) => {
    const patientData = req.body;
    const newPatient = new Patient(
        patientData.dni,
        patientData.name,
        patientData.surname,
        patientData.address,
        patientData.location,
        patientData.postalCode,
        patientData.telephone
    );
    patients.push(newPatient);
    res.status(201).json({ patient: newPatient });
});

// PUT: Actualizar paciente por DNI
router.put('/:dni', validateFields, (req, res) => {
    const patientIndex = patients.findIndex(p => p.dni === req.params.dni);
    if (patientIndex !== -1) {
        const updatedPatient = Object.assign(patients[patientIndex], req.body);
        res.status(200).json({ patient: updatedPatient });
    } else {
        res.status(404).json({ message: 'Paciente no encontrado' });
    }
});

// DELETE: Eliminar paciente por DNI
router.delete('/:dni', (req, res) => {
    patients = patients.filter(p => p.dni !== req.params.dni);
    res.status(200).json({ message: 'Paciente eliminado' });
});

module.exports = router;

//App.get o router.get?? 
//App.get s'utilitza per definir rutes a nivell de la app principal (apps més petites) i la ruta es fa accessible en tota la app.
//router.get per definir les rutes en subconjunts (mini-aplicacions) --> mòduls més petits que es poden reutilitzar