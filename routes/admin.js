
const express = require('express');
const adminController = require('../controllers/booking');

const router = express.Router();

router.get('/',adminController.getAppointmentPage)

router.post('/register', adminController.postRegister);
router.get('/bookingSuccess', adminController.getBookingSuccess);

router.get('/appointments', adminController.getAppointments);
   


module.exports = router;