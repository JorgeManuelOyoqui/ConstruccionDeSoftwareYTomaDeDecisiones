//Lógica
document.getElementById("startGame").addEventListener("click", startGame);

function startGame() {
    fetch("/game/create")
        .then(response => response.json())
        .then(data => {
            document.getElementById("gameState").innerText = `Estado: ${data.state}`;
            setupBoards();
        });
}

function setupBoards() {
    createBoard("board1");
    createBoard("board2");
}

function createBoard(boardId) {
    let board = document.getElementById(boardId);
    board.innerHTML = "";

    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.addEventListener("click", () => selectCell(boardId, x, y));
            board.appendChild(cell);
        }
    }
}

function selectCell(boardId, x, y) {
    console.log(`Seleccionando celda en ${boardId}: (${x}, ${y})`);
}

//Colocación de barcos
let shipsConfig = {
    carrier: 5,
    cruiser: 4,
    destroyer: 3,
    submarine: 2
};

function placeShips(player, boardId) {
    let ships = [];
    Object.keys(shipsConfig).forEach(type => {
        let positions = generateRandomShipPositions(shipsConfig[type]);
        ships.push({ type, positions });

        positions.forEach(([x, y]) => {
            document.querySelector(`#${boardId} .cell[data-x='${x}'][data-y='${y}']`).classList.add("ship");
        });
    });

    fetch(`/game/create/${player}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ships })
    });
}

function generateRandomShipPositions(size) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let positions = [];

    for (let i = 0; i < size; i++) {
        positions.push([x + i, y]); // Solo horizontal para este ejemplo
    }

    return positions;
}

//Turnos y ataques
function attackCell(boardId, x, y) {
    let player = boardId === "board1" ? 1 : 2;

    fetch("/game/turn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ player, attack: { x, y } })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "hit") {
            document.querySelector(`#${boardId} .cell[data-x='${x}'][data-y='${y}']`).classList.add("hit");
        } else {
            document.querySelector(`#${boardId} .cell[data-x='${x}'][data-y='${y}']`).classList.add("miss");
        }
    });
}

//Implementación de la moneda
function rollDice() {
    fetch("/dice")
        .then(response => response.json())
        .then(data => {
            alert(`El jugador que inicia es: Jugador ${data.starter}`);
        });
}

//Validación apra que los barcos no se encimen
function validateShipPlacement(ships) {
    let occupiedCells = new Set();

    for (let ship of ships) {
        let { positions } = ship;

        let isHorizontal = positions.every((pos, i, arr) => i === 0 || pos[0] === arr[i - 1][0] && pos[1] === arr[i - 1][1] + 1);
        let isVertical = positions.every((pos, i, arr) => i === 0 || pos[1] === arr[i - 1][1] && pos[0] === arr[i - 1][0] + 1);

        if (!(isHorizontal || isVertical)) {
            alert(`Error: ${ship.type} debe estar alineado.`);
            return false;
        }

        for (let pos of positions) {
            let key = `${pos[0]},${pos[1]}`;
            if (occupiedCells.has(key)) {
                alert(`Error: ${ship.type} se superpone con otro barco.`);
                return false;
            }
            occupiedCells.add(key);
        }
    }

    return true;
}

