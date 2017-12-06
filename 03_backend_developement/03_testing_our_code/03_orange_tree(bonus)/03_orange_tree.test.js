const orangeTree = require("./03_orange_tree.js");

test("Faire naitre l arbre", () => {
  orangeTree.seed();
  expect(orangeTree.alive).toBe(true);
});

for (let i = 1; i < 102; i++) {
  orangeTree.seed();
  test("Faire grandir jusque l age de " + (i) + "an(s) : test age et taille et pick up", () => {
    orangeTree.ageOneYear();
    // gestion de l age OK
    expect(orangeTree.age).toBe(i);


    // gestion de la croissance de l arbre jusqu'à la mort OK
    if (i <10) {
      expect(orangeTree.height).toBe((i)*25);
    } else if (i>=10 & i<20){
      expect(orangeTree.height).toBe(i*10+135);
    } if (i>=20){
      //expect(orangeTree.height).toBe(i*10+135);
    }

    // gestion de la production d'orange jusqu a la mort + mort à age > 100 ans
    if (i <5) {
      expect(orangeTree.oranges).toBe(0);
      expect(orangeTree.pickAnOrange()).toBeFalsy();
    } else if (i>=5 && i<10){
      expect(orangeTree.oranges).toBe(10);
    } else if (i>=10 && i<20){
      expect(orangeTree.oranges).toBe(20);
    } else if (i>=20 && i<40){
      expect(orangeTree.oranges).toBe(5);
      orangeTree.pickAnOrange();
      expect(orangeTree.oranges).toBe(4);
    } else {
      expect(orangeTree.oranges).toBe(0);
      expect(orangeTree.pickAnOrange()).toBeFalsy();
    }

    // gestion de la mort obligatoire après 100 warns
    if (i > 101) {
      orangeTree.mightDie();
      expect(orangeTree.alive).toBeFalsy();
    }
  });
}
