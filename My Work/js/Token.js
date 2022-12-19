class Token {

    constructor(index,owner){
        this.owner = owner;
        this.token = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    drawHTMLToken(){
        const token = document.createElement("div");
        const gameBoard = document.getElementbyId("game-board-underlay");
        gameBoard.appendChild(token);
        token.setAttribute("id", this.id);
        token.setAttribute("class", "token");
        token.style.backgroundColor = this.owner.color;
    }

    get htmlToken(){
        return this.drawHTMLToken;

    }

     /**
     * get left offset of html element
     * @return {number}  Left offset of token object's htmlToken
     */
     get offsetLeft(){
        return this.htmlToken.offsetLeft;
    }

    /**
     * Moves html token one column to the left
     */
    moveLeft(){
        if(this.columnLocation > 0){
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        }
    }
/**
 * Move html token one column to the right
 * @param {number} columns - number of columns in the game board
 */
    moveRight(columns){
        if(this.columnLocation < columns - 1){
            this.columnLocation.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }
    }
/**
 * Drops the html token in the targetd board space
 * @param {Object}  target- targeted space for dropped token
 * @param {function} reset - The reset function to call after the drop animation has completed.
 */
    drop(target, reset){
        this.dropped = true;

        $(this.htmlToken).animate({
        top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
    }
}