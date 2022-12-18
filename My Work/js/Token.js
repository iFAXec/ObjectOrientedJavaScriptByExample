class Token {

    constructor(index,owner){
        this.owner = owner;
        this.token = `token-${index}-${owner.id}`;
        this.dropped = false;
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
}