const expect = require('chai').expect;
const Game = require('../index');
const { it } = require('mocha');

describe('Bowling Game', () => {

  rollMany = (n, pins) => {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  rollSpare = () => {
    game.roll(5);
    game.roll(5);
  }

  rollStrike = () => {
    game.roll(10);
  }

  it('should correctly score a gutter game', () => {
    game = new Game();
    rollMany(20, 0);

    expect(game.score()).to.equal(0);
  });

  it('should correctly score all ones', () => {
    game = new Game();
    rollMany(20, 1);

    expect(game.score()).to.equal(20);
  });

  it('should correctly score a spare', () => {
    game = new Game();
    rollSpare();
    game.roll(3);
    rollMany(17, 0);

    expect(game.score()).to.equal(16);
  });

  it('should correctly score a strike', () => {
    game = new Game();
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(17, 0);

    expect(game.score()).to.equal(24);
  });

  it('should correctly score a perfect game', () => {
    game = new Game();
    rollMany(12, 10);

    expect(game.score()).to.equal(300);
  });

});