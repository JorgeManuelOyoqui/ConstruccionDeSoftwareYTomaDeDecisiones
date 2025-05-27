class GameModel {
    constructor() {
      this.state = "SETEANDO";
      this.players = { 1: {}, 2: {} };
      this.currentTurn = null;
    }
  
    rollDice() {
      if (this.state !== "SETEANDO") throw new Error("Solo se puede lanzar en SETEANDO");
      this.currentTurn = Math.random() < 0.5 ? 1 : 2;
      return this.currentTurn;
    }
  
    startGame() {
      if (Object.keys(this.players[1]).length === 10 && Object.keys(this.players[2]).length === 10) {
        this.state = "JUGANDO";
        return true;
      }
      return false;
    }
  
    attack(player, x, y) {
      if (this.state !== "JUGANDO") throw new Error("El juego no ha comenzado");
      if (player !== this.currentTurn) throw new Error("No es tu turno");
  
      let opponent = player === 1 ? 2 : 1;
      let hit = this.players[opponent].ships.some(ship =>
        ship.positions.some(pos => pos[0] === x && pos[1] === y)
      );
  
      if (hit) return { result: "hit", turnContinues: true };
      
      this.currentTurn = opponent;
      return { result: "miss", turnContinues: false };
    }
  }
  
  module.exports = new GameModel();
  