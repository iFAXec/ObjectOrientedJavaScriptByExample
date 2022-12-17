class Token {

    constructor(index,owner){
        this.owner = owner;
        this.token = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
}