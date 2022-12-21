class Game {
    constructor(){
        this.board = new Board;
        this.player = createPlayers();
        this.ready = false;
    }


     /**
     * Get active player to play
     * @return {Object} Player - active player
     */
     get activePlayer(){
        return this.players.find(player => player.active === true);
    }

    /** 
     * Create twio player objects
     * @return {Array} - An array of two player objects
     */

    createPlayers(){
        const players = [new Player("Player 1", 1, "#e15258", true), 
                         new Player("Player 2", 2,"#e59a13")]

        return players;

    }
/**
 * Begin game
 */
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    };   

 

    /**
     * Branches code, depending on what key player presses
     * @param {Object} e - Keydown event object
     */
    handleKeydown(e){
        if (this.ready) {
            if (e.key === "ArrowLeft"){
                this.activePlayer.activeToken.moveLeft();
            }else if(e.key === "ArrowRight"){
                this.activePlayer.activeToken.moveRight(this.board.columns);   
            }else if(e.key === "ArrowDown"){
                //move down
            }
        }
    }

    playToken(){
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;   

        for (let space of targetColumn) {
            if(spaces.token === null){
                targetSpace = space;
            }

            if (targetSpace !== null) {
                const game = this;
                game.ready = false;
                activeToken.drop(targetSpace,function(){
                    game.updateGameState(activeToken, targetSpace);
                });                
            }            
        }
    }

/**
 * Check if there is a winner on the bard after each token drop
 * @param {Object} Target space for the dropped token
 * @return {Boolen} Boolean value indicating weather the gae has been won (true) or not (false)
 */

checkForWin(){
    const owner = target.token.owner;
    let win = false;

    //vertical
    for (let x = 0; x < this.board.columns; x++) {
       for (let y = 0; y < this.board.rows-3; y++) {
            if(this.board.spaces[x][y].owner === owner &&
                this.board.spaces[x][y+1].owner === owner &&
                this.board.spaces[x][y+2].owner === owner &&
                this.board.spaces[x][y+3].owner === owner){
                    win =  true;
            }       
       }        
    }

    
    //Horizontal
    for (let x = 0; x < this.board.columns-3; x++) {
        for (let y = 0; y < this.board.rows; y++) {
            if(this.board.spaces[x][y].owner === owner &&
                this.board.spaces[x+1][y].owner === owner &&
                this.board.spaces[x+2][y].owner === owner &&
                this.board.spaces[x+3][y].owner === owner){
                    win= true;
            }           
        }        
    }

    //Diagonal downward
    for (let x = 0; x < this.board.columns; x++) {
        for (let y = 0; y < this.board.rows-3; y++) {
            if(this.board.spaces[x][y].owner === owner &&
                this.board.spaces[x-1][y+1].owner === owner &&
                this.board.spaces[x-2][y+2].owner === owner &&
                this.board.spaces[x-3][y+3].owner === owner){
                    win= true;
            }           
        }        
    }

        //Horizontal upward
        for (let x = 0; x < this.board.columns-3; x++) {
            for (let y = 0; y < this.board.rows; y++) {
                if(this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x-1][y-1].owner === owner &&
                    this.board.spaces[x-2][y-1].owner === owner &&
                    this.board.spaces[x-3][y-1].owner === owner){
                        win= true;
                }           
            }        
        }
    return win;
}

/**
 * switch active player
 */
switchPlayers(){
    this.players.forEach(player => {
        if(player.active === true){
            player.active === false;
        }else{
            player.active === true;
        }                
    })};

    /**
     * Display game over message
     * @param {string} Message - Game over message.
     */
    gameOver(message){
        const gameOver = document.getElementById("game-over");
        gameOver.style.display = "block";
        gameOver.textContent = message;
}

/**
 * updates game state after token is dropped
 * @param {Object} token - The token that's being dropped
 * @param {Object} target - targetedspace for dropped token 
 */
updateGameState(token, target){
    target.mark(token);
    if(!this.checkForWin(target)){
        this.switchPlayers(); 
           
        if(this.activePlayer.checkTokens()){
            this.activePlayer.activeToken.drawHTMLToken();
            this.ready = true;
        }else{
            this.gameOver(`No more tokens`);
        }
        
    }else{
        this.gameOver(`${target.owner.name} wins!`);
    }

}



}
