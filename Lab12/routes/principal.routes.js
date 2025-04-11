const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio' });
});

router.get('/acerca', (req, res) => {
  res.render('acerca', { titulo: 'Acerca' });
});

router.get('/saludo', (req, res) => {
  res.render('saludo', { titulo: 'Saludo' });
});

router.get('/json', (req, res) => {
  res.render('json', { titulo: '¿Qué es package.json?' });
});

router.get('/templatingEngines', (req, res) => {
  res.render('templatingEngines', { titulo: 'Templating Engines' });
});

module.exports = router;
