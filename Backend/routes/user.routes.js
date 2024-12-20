const express = require('express')
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../mddlewares/auth.middleware');


router.post('/register',[
    body('email').isEmail().withMessage('Invelid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
], userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invelid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
], userController.loginUser)

router.get('/profile', authMiddleware.authUser ,userController.getUserProfile)

router.get('/logout', authMiddleware.authUser ,userController.logoutUser)

module.exports = router;