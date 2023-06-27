const express = require('express');
const router = express.Router();
const doctorController = require('./doctorController');

// Add a doctor
router.post('/doctors', doctorController.addDoctor);

// Increase surgery count of a doctor
router.post('/doctors/increase-surgery/:name/:surname', doctorController.increaseSurgeryCount);

// Decrease surgery count of a doctor
router.post('/doctors/decrease-surgery/:name/:surname', doctorController.decreaseSurgeryCount);

// Increase patient count of a doctor
router.post('/doctors/increase-patient/:name/:surname', doctorController.increasePatientCount);

// Decrease patient count of a doctor
router.post('/doctors/decrease-patient/:name/:surname', doctorController.decreasePatientCount);

router.get('/doctors/getdoctor/:name/:surname', doctorController.getDoctor)

module.exports = router;