const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getHome);
router.get('/add', mainController.getAdd);
router.post('/add', mainController.postAdd);
router.get('/list', mainController.getList);
router.get('/preguntas', mainController.getPreguntas);

// Para el manejo de sesiones
router.get('/login', mainController.getLogin);
router.post('/login', mainController.postLogin);
router.get('/logout', mainController.getLogout);
//Para ver el mensaje de la cookie
router.get('/ver_cookie', mainController.getVerCookie);

module.exports = router;

