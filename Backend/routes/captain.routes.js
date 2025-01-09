const express = require('express');
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware  = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/register',[
    body('fullname.firstname').isLength({min: 3}).withMessage('First and Last name must be at least 3 characters'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters'),
    body('vehicle.color').isLength({min: 3}).withMessage('vehicle color must be at least 3 characters'),
    body('vehicle.plate').isLength({min: 3}).withMessage('vehicle plate must be at least 3 characters'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('vehicle capacity must be at least 3 characters'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle Type')
],captainController.registerCaptain)

router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters')
],captainController.logingCaptain)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)
module.exports = router;