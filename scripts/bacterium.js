function Bacterium (growRate, pop) {
    this.growRate = growRate;
    this.pop = pop;
    this.grow = function () {
      this.pop = this.pop + (this.growRate * this.pop);
    };
}

var stinkobacter = new Bacterium(0.15, 65);

console.log(stinkobacter.pop);

stinkobacter.grow();
console.log("Stinkobacter's current population is " + stinkobacter.pop);

stinkobacter.name = "stinkobacter";

console.log(stinkobacter.valueOf());

var ministinko = Object.create(stinkobacter);
ministinko.pop = 100;

console.log(ministinko.hasOwnProperty("pop"));

String.prototype.annaGreat = function () {
    return ("Anna is great! " + this);
};

var andYouKnowIt = "And you know it.";
console.log(andYouKnowIt.annaGreat());
