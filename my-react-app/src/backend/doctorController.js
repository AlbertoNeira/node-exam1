const Doctor = require('./Doctor'); // Import the Doctor model

// Controller function for adding a doctor
async function addDoctor(req, res) {
  try {
    const { name, surname, surgeryCount, patientCount } = req.body;

    // Create a new doctor instance
    const doctor = new Doctor({
      name,
      surname,
      surgeryCount,
      patientCount
    });

    // Save the doctor to the database
    await doctor.save();

    res.status(201).json({ success: true, message: 'Doctor added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding doctor', error });
  }
}

// Controller function for increasing surgery count of a doctor
async function increaseSurgeryCount(req, res) {
  try {
    const { name, surname } = req.params;
    console.log(name, surname, "ALBERTOOOOOOOOO");

    // Find the doctor by name and surname and increment the surgery count
    const doctor = await Doctor.findOneAndUpdate(
      { name: name, surname: surname },
      { $inc: { surgeryCount: 1 } },
      { new: true }
    );

    if (doctor) {
      console.log("Surgery count increased successfully");
      res.json({ success: true, message: 'Surgery count increased successfully' });
    } else {
      console.log("Doctor not found");
      res.status(404).json({ success: false, message: 'Doctor not found' });
    }
  } catch (error) {
    console.error("Error increasing surgery count", error);
    res.status(500).json({ success: false, message: 'Error increasing surgery count', error });
  }
}

// Controller function for decreasing surgery count of a doctor
async function decreaseSurgeryCount(req, res) {
  try {
    const { name, surname } = req.params;

    // Find the doctor by name and surname and decrement the surgery count
    const doctor = await Doctor.findOneAndUpdate(
      { name: name, surname: surname },
      { $inc: { surgeryCount: -1 } },
      { new: true }
    );

    if (doctor) {
      console.log("Surgery count decreased successfully");
      res.json({ success: true, message: 'Surgery count decreased successfully' });
    } else {
      console.log("Doctor not found");
      res.status(404).json({ success: false, message: 'Doctor not found' });
    }
  } catch (error) {
    console.error("Error decreasing surgery count", error);
    res.status(500).json({ success: false, message: 'Error decreasing surgery count', error });
  }
}

// Controller function for increasing patient count of a doctor
async function increasePatientCount(req, res) {
  try {
    const { name, surname } = req.params;

    // Find the doctor by name and surname and increment the patient count
    const doctor = await Doctor.findOneAndUpdate(
      { name: name, surname: surname },
      { $inc: { patientCount: 1 } },
      { new: true }
    );

    if (doctor) {
      console.log("Patient count increased successfully");
      res.json({ success: true, message: 'Patient count increased successfully' });
    } else {
      console.log("Doctor not found");
      res.status(404).json({ success: false, message: 'Doctor not found' });
    }
  } catch (error) {
    console.error("Error increasing patient count", error);
    res.status(500).json({ success: false, message: 'Error increasing patient count', error });
  }
}

async function decreasePatientCount(req, res) {
  try {
    const { name, surname } = req.params;

    // Find the doctor by name and surname and decrement the patient count
    const doctor = await Doctor.findOneAndUpdate(
      { name: name, surname: surname },
      { $inc: { patientCount: -1 } },
      { new: true }
    );

    if (doctor) {
      console.log("Patient count decreased successfully");
      res.json({ success: true, message: 'Patient count decreased successfully' });
    } else {
      console.log("Doctor not found");
      res.status(404).json({ success: false, message: 'Doctor not found' });
    }
  } catch (error) {
    console.error("Error decreasing patient count", error);
    res.status(500).json({ success: false, message: 'Error decreasing patient count', error });
  }
}


async function getDoctor(req, res) {
  try {
    const { name,surname } = req.params;

    // Find the doctor by ID and decrement the patient count
    let result = await Doctor.find({ name: name, surname: surname });
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: 'cant get doctor', error });
  }
}

module.exports = {
  addDoctor,
  increaseSurgeryCount,
  decreaseSurgeryCount,
  increasePatientCount,
  decreasePatientCount,
  getDoctor
};