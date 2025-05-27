class GameView {
    constructor() {
      this.updateGameState("SETEANDO");
    }
  
    updateGameState(state) {
      document.getElementById("gameState").innerText = `Estado: ${state}`;
    }
  
    displayAttackResult(result) {
      alert(result === "hit" ? "¡Impacto!" : "¡Fallaste!");
    }
  }
  