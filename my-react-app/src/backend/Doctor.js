const mongoose = require('mongoose');

// Define the schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  surgeryCount: {
    type: Number,
    required: true
  },
  patientCount: {
    type: Number,
    required: true
  }
});

// Create the model
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;


// addDoctor
// increase doctor surgery
// descrese doctor surgery

// decrease and increse pacient count



// name,surname,surgery count, pacient count
