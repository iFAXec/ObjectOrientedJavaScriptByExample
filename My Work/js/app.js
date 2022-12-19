const game = new Game();

const beginGame = document.getElementById("begin-game");
// console.log(beginGame);

/**
 * Listens for click on begin game and call start game on game object 
 */
beginGame.addEventListener("click", ()=>{
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
})


document.addEventListener("keydown",(e)=>{
    game.handleKeydown(e);
});