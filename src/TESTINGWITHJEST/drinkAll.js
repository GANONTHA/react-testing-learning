export function drinkAll(callback, flavour) {
  if (flavour !== "octopus") {
    callback(flavour);
  }
  return flavour;
}

export function drinkEach(drink, flavours) {
  flavours.forEach((flavour) => {
    drink(flavour);
  });
}
