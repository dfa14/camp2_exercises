
const request = require ("request");
const weatherByCity2 = require("./weatherByCity2")
const API_KEY = process.env.GOOGLE_API_KEY;
const stores = [
  "Decat Bordeaux Ste Catherine (Decathlon), 130 Rue Sainte-Catherine, 33000 Bordeaux",
  "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille",
  "Decathlon Strasbourg Geispolsheim, 5 Rue du Fort, 67118 Geispolsheim",
  "Decathlon Wagram Paris, 26 Avenue de Wagram, 75008 Paris",
  "Decathlon Lorient, Rue Colonel le Barillec, 56100 Lorient",
  "Decathlon, 4 Boulevard de Mons, 59650 Villeneuve-d'Ascq"
];
const arrayOfCity = [];
// utiliser Weatherbycity pour avoir le temps de chaque commune
//donc il faut mapper le string pour avoir la commune

for (let i = 0; i < stores.length; i++) {
  const arrayTemp =stores[i].split(" ");
  arrayOfCity.push(arrayTemp[arrayTemp.length - 1]);
}
console.log(arrayOfCity);
console.log(arrayOfCity[0]);
weatherByCity(arrayOfCity[0]);
