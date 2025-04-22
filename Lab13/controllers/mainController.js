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

exports.home = (req, res, next) => {
    res.render('index');
};
  
exports.preguntas = (req, res, next) => {
    res.render('preguntas');
};
  
