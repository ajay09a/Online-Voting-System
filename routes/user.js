const express = require('express');

const router = express.Router();
const userController = require('../controllers/user_controller');

// console.log("router loaded");
router.get('/profile', userController.profile);
router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);

router.post('/create', userController.create);
router.post('/create-session', userController.createSession);
router.get('/sign-out', userController.deleteSession);

module.exports = router;