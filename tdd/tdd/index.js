
class Game {

    constructor() {
        this.rolls = [];
        this.currentRoll = 0;
    };

    roll = (pins) => {
        this.rolls.push(pins);
        this.currentRoll++;
    };

    score = () => {
        let score = 0;
        let i = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(i)) {
                score += (10 + this.strikeBonus(i));
                i += 1;
            } else if (this.isSpare(i)) {
                score += (10 + this.spareBonus(i));
                i += 2;
            } else {
                score += this.pinsInFrame(i);
                i += 2;
            }
        }
        
        return score;
    };

    isStrike = (index) => this.rolls[index] === 10;

    isSpare = (index) => this.rolls[index] + this.rolls[index + 1] == 10;

    strikeBonus = (index) => this.rolls[index+1] + this.rolls[index+2];

    spareBonus = (index) => this.rolls[index+2];

    pinsInFrame = (index) => this.rolls[index] + this.rolls[index+1];

};

module.exports = Game;
