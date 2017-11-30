// See Sparta courses for the exercise summary

//création de l'objet
// création d'une fonction avec 4 param -> quels params ?
//...

const car = {
  engine: "off",
  speed: 0,
  timeDrive: 0,
  distance:0,

  start: function() {
    //console.log("The engine will be On in 1sec ");
    this.speed = 0;
    this.timeDrive = 0;
    this.engine = "on";
    this.ditance =0;
    return car;
  },

  changeSpeed: function(speedTarget) {
    this.speed = speedTarget;
    return car;
  },

  drive: function(timeDrived) {
    this.timeDrive = this.timeDrive+timeDrived;
    return car;
  },

  showDistance: function() {
    //console.log("tu as conduit ");
    const temp = (this.speed * this.timeDrive)/60;
    this.distance = this.distance + temp;
    console.log(this.distance + "km");
    return this.distance;
  },

}


////cumul dans le showdistance !!!!

car.start().changeSpeed(130).drive(42).showDistance();

module.exports = car;
