document.getElementById("shoppingForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita recarga de página

    const name = document.getElementById("name").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    const newItem = { name, quantity, price };

    const response = await fetch("/add_item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem)
    });

    const result = await response.json();

    if (result.code == 201) {
        loadShoppingList(); // Refrescar tabla después del POST
    }
});

// Evento del botón "Actualizar Productos" para refrescar la tabla con AJAX
document.getElementById("updateProducts").addEventListener("click", function(event) {
    loadShoppingList();
});

// **ACTUALIZACIÓN AUTOMÁTICA** cada 5 segundos con AJAX
setInterval(() => {
    loadShoppingList();
}, 5000);

async function loadShoppingList() {
    const response = await fetch("/shopping_list");

    if (response.ok) {
        const data = await response.json();

        console.log("Datos cargados:", data.shoppingList); // Debug para verificar datos en consola

        // **Imprimir la lista de productos debajo del formulario**
        const productListContainer = document.getElementById("productList");
        productListContainer.innerHTML = ""; // Limpiar antes de actualizar
        data.shoppingList.forEach(item => {
            productListContainer.innerHTML += `<p>{ id: ${item.id}, name: '${item.name}', quantity: '${item.quantity}', price: '${item.price}', totalPrice: ${item.totalPrice} }</p>`;
        });

        // **Actualizar la tabla Grid.js**
        document.getElementById("wrapper").innerHTML = ""; // Limpiar el contenedor

        new gridjs.Grid({
            columns: ["ID", "Nombre", "Cantidad", "Precio Unitario", "Precio Total"],
            pagination: true,
            search: true,
            sort: true,
            data: data.shoppingList.map(obj => [obj.id, obj.name, obj.quantity, obj.price, obj.totalPrice])
        }).render(document.getElementById("wrapper"));
    } else {
        console.error("Error al obtener la lista de compras");
    }
}

