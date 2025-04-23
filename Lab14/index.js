const express = require('express');
const bodyParser = require('body-parser');
const mainRoutes = require('./routes/mainRoutes');
const cookieParser = require("cookie-parser"); //Para trabajar con cookies
const session = require("express-session"); //Para trabajar con manejo de sesiones
const flash = require('connect-flash'); //Para trabajar con flash

const app = express();

app.use(flash());

//Se usa npm install cookie-parser para trabajar con cookies
app.use(cookieParser());
app.use(session({
    //Le meto a secret el lorem impsum para qye el string se acerque un poco más a los 256 caracteres
    secret: "mi string secreto que debe ser un string aleatorio muy largo de más de 256 caracteres, y por eso le meto el lorem ipsum apra que sea lo suficientemente largo: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para cada petición que no lo necesita
}));
app.use(bodyParser.urlencoded({ extended: false }));

//Se usa npm install express-session para trabajar con el manejo de sesiones

//Se usa npm intall connect-flash para trabajar con mensajes flash
//El siguiente middleware es para pasar los mensajes flash a todas las vistas:
app.use((req, res, next) => {
  let mensajeFlash = req.flash('mensajeFlash'); // <- Solo se llama una vez aquí
  if ((!mensajeFlash || mensajeFlash.length === 0) && req.cookies.mensajeFlashTemporal) {
    mensajeFlash = [req.cookies.mensajeFlashTemporal];
    res.clearCookie('mensajeFlashTemporal');
  }
  res.locals.mensajeFlash = mensajeFlash;
  next();
});




app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
// En mainRoutes ya se encuentra lo del control de sesiones 
app.use(mainRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
