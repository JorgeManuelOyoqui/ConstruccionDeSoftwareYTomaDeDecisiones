const Item = require('../models/Item');

exports.getAdd = (req, res) => {
  res.render('add.ejs');
};

exports.postAdd = (req, res) => {
  const newItem = new Item(req.body.value);
  newItem.save();
  res.redirect('/list');
};

exports.getList = (req, res) => {
  const items = Item.fetchAll();
  res.render('list.ejs', { items: items });
};

exports.getHome = (req, res) => {
  const username = req.session.username;
  res.setHeader('Set-Cookie', 'mi_cookie=ningún_dato_sale_o_entra_de_aquí_Data_shall_not_pass_>:3; HttpOnly');
  res.render('index', { username: username });
};

exports.getPreguntas = (req, res) => {
  res.render('preguntas');
};

exports.getLogin = (req, res) => {
  res.render('login');
};

exports.getVerCookie = (req, res) => {
  const valorCookie = req.cookies.mi_cookie;
  res.setHeader('Content-Type', 'text/plain');
  res.send(`Valor de la cookie: ${valorCookie}`);
};

//Para trabajar con mensajes flash
exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    req.session.username = username;
    req.flash('mensajeFlash', `Bienvenido, ${username}`);
    res.redirect('/');
  } else {
    req.flash('mensajeFlash', 'Por favor, completa todos los campos.');
    res.redirect('/login');
  }
};

exports.getLogout = (req, res) => {
  // Guardar el mensaje flash en una variable temporal
  const mensaje = 'Sesión cerrada correctamente.';
  // Guardar manualmente el mensaje en una cookie temporal
  res.cookie('mensajeFlashTemporal', mensaje, { maxAge: 3000 }); // 3 segundos
  // Destruir sesión
  req.session.destroy(() => {
    res.redirect('/');
  });
};


