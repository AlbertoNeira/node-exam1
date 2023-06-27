import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [surgeryCount, setSurgeryCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
 

  const addDoctor = async () => {
    try {
      const newDoctor = {
        name,
        surname,
        surgeryCount,
        patientCount
      };

      await axios.post('http://localhost:3020/doctors', newDoctor);
      console.log('Doctor added successfully');
    } catch (error) {
      console.error('Error adding doctor', error);
    }
  };

  const increaseSurgeryCount = async () => {
    try {
      await axios.post(`http://localhost:3020/doctors/increase-surgery/${name}/${surname}`);
;
      console.log('Surgery count increased successfully');
    } catch (error) {
      console.error('Error increasing surgery count', error);
    }
  };

  const decreaseSurgeryCount = async () => {
    try {
      await axios.post(`http://localhost:3020/doctors/decrease-surgery/${name}/${surname}`);
      console.log('Surgery count decreased successfully');
    } catch (error) {
      console.error('Error decreasing surgery count', error);
    }
  };

  const increasePatientCount = async () => {
    try {
      await axios.post(`http://localhost:3020/doctors/increase-patient/${name}/${surname}`);
      console.log('Patient count increased successfully');
    } catch (error) {
      console.error('Error increasing patient count', error);
    }
  };

  const decreasePatientCount = async () => {
    try {
      await axios.post(`http://localhost:3020/doctors/decrease-patient/${name}/${surname}`);
      console.log('Patient count decreased successfully');
    } catch (error) {
      console.error('Error decreasing patient count', error);
    }
  };

  const clearInput = (inputId) => {
    switch (inputId) {
      case 'name':
        setName('');
        break;
      case 'surname':
        setSurname('');
        break;
      case 'surgeryCount':
        setSurgeryCount(0);
        break;
      case 'patientCount':
        setPatientCount(0);
        break;
    
      default:
        break;
    }
  };

  return (
    <div className='container'>
      <h2>Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <div className="input-container">
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="button" onClick={() => clearInput('name')}>Clear</button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <div className="input-container">
            <input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <button type="button" onClick={() => clearInput('surname')}>Clear</button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="surgeryCount">Surgery Count:</label>
          <div className="input-container">
            <input type="number" id="surgeryCount" name="surgeryCount" value={surgeryCount} onChange={(e) => setSurgeryCount(Number(e.target.value))} />
            <button type="button" onClick={() => clearInput('surgeryCount')}>Clear</button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="patientCount">Patient Count:</label>
          <div className="input-container">
            <input type="number" id="patientCount" name="patientCount" value={patientCount} onChange={(e) => setPatientCount(Number(e.target.value))} />
            <button type="button" onClick={() => clearInput('patientCount')}>Clear</button>
          </div>
        </div>

        <div className="buttons">
          <button type="button" onClick={addDoctor}>Add Doctor</button>
          <button type="button" onClick={increaseSurgeryCount}>Increase Surgery Count</button>
          <button type="button" onClick={decreaseSurgeryCount}>Decrease Surgery Count</button>
          <button type="button" onClick={increasePatientCount}>Increase Patient Count</button>
          <button type="button" onClick={decreasePatientCount}>Decrease Patient Count</button>
        </div>
      </form>
    </div>
  );
}

export default App;
