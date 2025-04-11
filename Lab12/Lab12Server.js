const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
const rutasPrincipal = require('./routes/principal.routes');
const rutasFormulario = require('./routes/formulario.routes');
app.use(rutasPrincipal);
app.use(rutasFormulario);

// 404
app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Página no encontrada' });
});

app.listen(4000, () => {
  console.log('Servidor corriendo en http://localhost:4000');
});


