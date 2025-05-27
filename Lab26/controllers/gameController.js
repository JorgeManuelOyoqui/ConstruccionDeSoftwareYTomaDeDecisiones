const gameModel = require("../models/gameModel");

exports.createGame = (req, res) => {
  gameModel.state = "SETEANDO";
  gameModel.players = { 1: {}, 2: {} };
  res.json({ message: "Juego creado", state: gameModel.state });
};

exports.getGameStatus = (req, res) => {
  res.json({
    state: gameModel.state,
    currentTurn: gameModel.currentTurn,
    players: gameModel.players,
  });
};

exports.rollDice = (req, res) => {
  try {
    const starter = gameModel.rollDice();
    res.json({ starter });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.placeShips = (req, res) => {
    const { player } = req.params;
    const { ships } = req.body;

    if (gameModel.state !== "SETEANDO") {
        return res.status(400).json({ error: "No permitido, el juego ya está en curso" });
    }

    let occupiedCells = new Set();

    for (let ship of ships) {
        if (!isValidPlacement(ship, occupiedCells)) {
            return res.status(400).json({ error: `Posición inválida para ${ship.type}` });
        }
        ship.positions.forEach(pos => occupiedCells.add(JSON.stringify(pos))); // Guardamos la celda ocupada
    }

    gameModel.players[player] = { ships };

    if (Object.keys(gameModel.players[1]).length === 10 && Object.keys(gameModel.players[2]).length === 10) {
        gameModel.state = "JUGANDO";
    }

    res.json({ message: `Barcos colocados para jugador ${player}`, state: gameModel.state });
};

// Función para validar colocación
function isValidPlacement(ship, occupiedCells) {
    let { positions } = ship;
    
    // Verifica alineación horizontal o vertical
    let isHorizontal = positions.every((pos, i, arr) => i === 0 || pos[0] === arr[i - 1][0] && pos[1] === arr[i - 1][1] + 1);
    let isVertical = positions.every((pos, i, arr) => i === 0 || pos[1] === arr[i - 1][1] && pos[0] === arr[i - 1][0] + 1);
    
    if (!(isHorizontal || isVertical)) return false;

    // Verifica si alguna celda está ocupada
    for (let pos of positions) {
        if (occupiedCells.has(JSON.stringify(pos))) return false;
    }
    
    return true;
}

exports.attack = (req, res) => {
  const { player, attack } = req.body;

  try {
    const result = gameModel.attack(player, attack.x, attack.y);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
