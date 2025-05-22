const log = console.log;

let shoppingList = [];
let currentId = 1; // Inicia en 1

module.exports.getList = async (req, res) => {
    return res.status(200).json({ shoppingList });
};

module.exports.addItem = async (req, res) => {
    const { name, quantity, price } = req.body;

    if (!name || !quantity || !price) {
        return res.status(422).json({ code: 422, msg: "Todos los campos son obligatorios" });
    }

    const totalPrice = quantity * price;
    const newItem = {
        id: currentId++,
        name,
        quantity,
        price,
        totalPrice
    };

    shoppingList.push(newItem);

    log("Nuevo artículo agregado:", newItem);
    return res.status(201).json({ code: 201, message: "Artículo agregado con éxito!", data: shoppingList });
};
