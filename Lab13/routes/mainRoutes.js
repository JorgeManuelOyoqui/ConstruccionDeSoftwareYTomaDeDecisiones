const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/add', mainController.getAdd);
router.post('/add', mainController.postAdd);
router.get('/list', mainController.getList);
router.get('/', mainController.home);
router.get('/preguntas', mainController.preguntas);
  
module.exports = router;