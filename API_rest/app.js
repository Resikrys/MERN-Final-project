//Conexiones servidor local
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const Patient = require('./models/patient'); //Afegit per mi
const patientRouter = require('./routes/patients');

// Configura cors con opciones específicas
// const corsOptions = {
//     origin: 'http://tu-frontend.com', // Reemplaza con la URL de tu frontend (modificar quan estigui feta)
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
// };
//Configuració mentres no existeix la part front-end
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/patients', patientRouter);



app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});