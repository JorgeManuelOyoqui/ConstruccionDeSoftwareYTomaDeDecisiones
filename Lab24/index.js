const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const shoppingListController = require("./shoppingList.controller");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/shopping_list", shoppingListController.getList);
app.post("/add_item", shoppingListController.addItem);

app.listen(3001, () => {
    console.log("Server is running on port 3000");
});
