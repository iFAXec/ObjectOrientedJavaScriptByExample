class Player {
    constructor(name, id, color, active = false){
        this.name= name;
        this.id = id;
        this.color =color;
        this.active = active;
        this.token = this.createToken(21);
    }
/**
 * @param {number} num - Number of tokens to be created 
 * @returns {Array} An array of newly created token object
 */
    createTokens(num){
        const tokens = [];
        for (let i = 0; i < num; i++) {
            let token = new Token(i,this);
            tokens.push(token);
        }
        return tokens;
    }
}