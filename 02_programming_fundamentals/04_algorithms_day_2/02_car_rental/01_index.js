const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car

function canRentACar(driver) {

<<<<<<< HEAD
  if ((driver.driverLicense==="B") && (driver.licenseIssued<=2015) && ((driver.numberOfAccident===0) || (driver.bonus>0.7))) {
=======
  if ((driver.License==="B") && (driver.licenseIssued<=2015) && ((driver.numberOfAccident===0) || (driver.bonus>0.7))) {
>>>>>>> test commit du lundi matin
    return true;
  }
  else {
    return false;
  }

}
//
// const driver = {
//   driverLicense: "B",
//   licenseIssued: 2014,
//   numberOfAccident: 0,
//   bonus: 0.8,
// };

}

const driver2 = {
  driverLicense: "B",
  licenseIssued: 2010,
  numberOfAccident: 0,
  bonus: 0.8,
};

// pour test uniquement à deleter si besoin

console.log(driver2.driverLicense==="B");
console.log(driver2.licenseIssued<=2015);
console.log(driver2.numberOfAccident===0);
console.log(driver2.bonus>0.7);
console.log("Résultat");
console.log(canRentACar(driver2));

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
