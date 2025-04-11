const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/formulario', (req, res) => {
  res.render('formulario', { titulo: 'Formulario' });
});

router.post('/procesar', (req, res) => {
  const { nombre, mensaje } = req.body;
  const mensajeFormateado = `Nombre: ${nombre}\nMensaje: ${mensaje}\n---\n`;

  fs.appendFile(
    path.join(__dirname, '..', 'mensajes.txt'),
    mensajeFormateado,
    (err) => {
      if (err) return res.status(500).send('Error al guardar mensaje');
      res.redirect('/mensajes');
    }
  );
});

router.get('/mensajes', (req, res) => {
  const archivo = path.join(__dirname, '..', 'mensajes.txt');

  fs.readFile(archivo, 'utf8', (err, contenido) => {
    if (err) return res.status(500).send('Error al leer mensajes');
    const bloques = contenido.trim().split('---\n').filter(Boolean);
    const mensajes = bloques.map(b => {
      const lineas = b.trim().split('\n');
      return {
        nombre: lineas[0].replace('Nombre: ', ''),
        mensaje: lineas[1].replace('Mensaje: ', '')
      };
    });

    res.render('mensajes', { titulo: 'Mensajes', mensajes });
  });
});

module.exports = router;
