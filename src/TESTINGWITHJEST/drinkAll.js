export default function drinkAll(callback, flavour) {
  if (flavour !== "octopus") {
    callback(flavour);
  }
}
