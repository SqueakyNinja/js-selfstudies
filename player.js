class Player {
  constructor(name, points = 0) {
    this.name = name;
    this.points = points;
  }
  addPoints(points) {
    this.points += points;
    console.log(this.points);
  }
  deductPoints(points) {
    this.points -= points;
    if (this.points < 0) {
      this.points = 0;
    }
    console.log(this.points);
  }
  static printHighScore(arrayOfPlayers) {
    arrayOfPlayers.sort((a, b) => {
      if (a.points < b.points) {
        return 1;
      }
      if (a.points > b.points) {
        return -1;
      }
      if ((a.points = b.points)) {
        return 0;
      }
    });
    for (let i = 0; i < arrayOfPlayers.length; i++) {
      const element = arrayOfPlayers[i];
      console.log(`${element.name} has ${element.points} points`);
    }
  }
}
let Rasmus = new Player("Rasmus");
Rasmus.addPoints(5);
Rasmus.deductPoints(2);

let Göran = new Player("Göran");
Göran.addPoints(6);
Göran.deductPoints(1);

let Bengt = new Player("Bengt");
Bengt.addPoints(7);
Bengt.deductPoints(6);

let arrayOfPlayers = [Rasmus, Göran, Bengt];

Player.printHighScore(arrayOfPlayers);
Rasmus.addPoints(20);
Player.printHighScore(arrayOfPlayers);
Göran.addPoints(24);
Player.printHighScore(arrayOfPlayers);
Bengt.deductPoints(30);
Player.printHighScore(arrayOfPlayers);
