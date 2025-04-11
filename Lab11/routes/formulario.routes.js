const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/formulario', (req, res) => {
  res.send(`
    <form action="/procesar" method="POST">
      <label>Nombre: <input name="nombre" /></label><br>
      <label>Mensaje: <textarea name="mensaje"></textarea></label><br>
      <button type="submit">Enviar</button>
    </form>
    <a href="/">Inicio</a>
  `);
});

router.post('/procesar', (req, res) => {
  const { nombre, mensaje } = req.body;
  const texto = `Nombre: ${nombre}\nMensaje: ${mensaje}\n---\n`;

  fs.appendFile('mensajes.txt', texto, (err) => {
    if (err) {
      res.status(500).send('Error al guardar mensaje');
    } else {
      res.send('<h1>Mensaje recibido</h1><a href="/">Inicio</a>');
    }
  });
});

module.exports = router;
