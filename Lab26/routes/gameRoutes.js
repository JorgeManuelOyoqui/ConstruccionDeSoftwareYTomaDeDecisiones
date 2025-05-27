const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.get("/create", gameController.createGame);
router.get("/status", gameController.getStatus);
router.get("/dice", gameController.rollDice);
router.post("/create/:player", gameController.placeShips);
router.post("/turn", gameController.attack);

module.exports = router;
