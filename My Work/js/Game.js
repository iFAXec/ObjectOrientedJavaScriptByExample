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


    }
    }

    
