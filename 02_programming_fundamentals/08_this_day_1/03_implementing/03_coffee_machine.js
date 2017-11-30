// See Sparta courses for the exercise summary

// Coffee Machine usage. Insert your code above this comment

const machine = {
  power: "off",
  litersOfCoffee : 0,

  expresso: function() {
    console.log("je lance la fonction expresso");
    // A priori volume nécessaire pour un expresso :-> 0,08 Unité
    console.log("volume restant dans la cafetière");
    this.litersOfCoffee = (this.litersOfCoffee - 0.08);
    console.log(this.litersOfCoffee);
    return  this.litersOfCoffee >= 0;
  },

  longCoffee: function() {
    console.log("je lance la fonction longCoffee");
    // A priori volume nécessaire pour un café long :-> 0,15 Unité
    console.log("volume restant dans la cafetière");
    this.litersOfCoffee = (this.litersOfCoffee - 0.15);
    console.log(this.litersOfCoffee);
    console.log("volume restant dans la cafetière");
    return  this.litersOfCoffee >= 0;
  },

  fillWithLitersOfCoffee: function(volume) {
    console.log("je remplis la machine à café");
    this.litersOfCoffee = this.litersOfCoffee+volume;
    console.log("volume restant dans la cafetière");
    console.log(this.litersOfCoffee);
  },
  // return nécessaire ?
}




machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()) // => true quand café est servi
console.log(machine.litersOfCoffee) // => 9.92
console.log(machine.longCoffee()) // => true idem
console.log(machine.litersOfCoffee) // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee) // => 0.02
console.log(machine.expresso()) // => false

module.exports = machine;
