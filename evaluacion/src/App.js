
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import PatientTable from './components/PatientTable';
import CreatePatient from './components/CreatePatient';
import ModifyPatient from './components/ModifyPatient';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
      <div className='box-container'>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabla" element={<PatientTable />} />
          <Route path="/crear" element={<CreatePatient />} />
          <Route path="/modify/:dni" element={<ModifyPatient />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;