const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const gameRoutes = require("./routes/gameRoutes");
const gameController = require("./controllers/gameController");

const app = express();

// Configurar EJS como motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public")); // Indica dónde están los archivos EJS

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/game", gameRoutes);

// Ruta principal para servir index.ejs
app.get("/", (req, res) => {
    const gameStatus = gameController.getGameStatus(); // Llama al controlador
    
    res.render("index", {
        estadoJuego: gameStatus.state,
        turnoActual: gameStatus.currentTurn || "Pendiente",
        jugadores: gameStatus.players
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
