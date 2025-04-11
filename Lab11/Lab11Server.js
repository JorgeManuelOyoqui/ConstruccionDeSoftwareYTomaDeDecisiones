// Lab10Server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 4000;

// Para leer datos de formularios
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (CSS, JS)
app.use(express.static(__dirname));

// Importar rutas personalizadas
const rutasFormulario = require('./routes/formulario.routes');
const rutasPrincipal = require('./routes/principal.routes');

// Usar rutas
app.use('/', rutasPrincipal);
app.use('/', rutasFormulario);

// Ruta 404 al final
app.use((req, res) => {
  res.status(404).send(`
    <html><head><title>404</title></head>
    <body><h1>404 - Página no encontrada</h1><a href="/">Inicio</a></body></html>
  `);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
