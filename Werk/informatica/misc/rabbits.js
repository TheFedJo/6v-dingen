class Rabbit {
  constructor(type, color, activity) {
    this.type = type;
    this.color = color;
    this.activity = activity;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'. His fur is ${this.color}.`);
  }
  usually() {
    console.log("The", this.type, "rabbit usually", this.activity)
  }
}

let killerRabbit = new Rabbit("killer", "yellow", "kills everything in his way.");
let blackRabbit = new Rabbit("black", "black", "protests against racism." );
blackRabbit.speak("Black lives matter!")
blackRabbit.usually();
