// See Sparta courses for the exercise summary

const orangeTree = {
  height:0,
  age: 0,
  oranges: 0,
  alive: false,
  willDieAt:0,

  pickAnOrange: function (){
    //console.log("je lance pickorange");
    //console.log("nbre d orange avant traitement : ")
    //console.log(this.oranges);
    if (this.oranges>1) {
        this.oranges = this.oranges -1;
        return true;
    } return false;

    //console.log("nbre d orange après traitement : ")
    //console.log(this.oranges);
    //return nécessaire ?
  },
  ageOneYear: function (){
    let trancheAge = 0;

    // gestion de l'incrémentation de l'age
    //console.log("je prends un an");
    this.age = this.age + 1;

    // death management

    if (this.age>=this.willDieAt) {
      return "sorry, your orangeTree is dead";
    }
    //console.log("voilà mon age");
    //console.log(this.age);

    // gestion de la croissance de taille
    trancheAge = Math.trunc(this.age/10);
    switch (trancheAge) {
      case (0):
        this.height = this.height + 25;
        break;
      case (1):
        this.height = this.height + 10;
        break;
    };
    //console.log("nouvelle taille");
    //console.log(this.height);

    // gestion de la production
    trancheAge = Math.trunc(this.age/5);
    switch (trancheAge) {
      //case 0 : this.oranges = this.oranges + 0; break;
      case 1 : this.oranges = 10; break;
      case 2 : this.oranges = 20; break;
      case 3 : this.oranges = 20; break;
      case 4 : this.oranges = 5; break;
      case 5 : this.oranges = 5; break;
      case 6 : this.oranges = 5; break;
      case 7 : this.oranges = 5; break;
      default:this.oranges = 0;
      //default: this.oranges = this.oranges;
    };
    //console.log("nouveau nbre d orange");
    //console.log(this.oranges);

  },
  seed: function (){
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    //console.log(this.alive);
    //console.log("je suis planté et donc en vie");
    this.alive = true;
    //console.log("je suis");
    //console.log(this.alive);
    this.willDieAt = Math.floor((Math.random()*49)+50);
    console.log("je suis désolé de te le dire mais ton arbre mourra à");
    console.log(this.willDieAt);
    //return nécessaire ?
  },
  //return nécessaire ?
}


module.exports = orangeTree;
