// Code your solution in this file!
let feet = 264
function distanceFromHqInBlocks(value) {
  if (value < 42) {
    return 42 - value
  } else {
    return value - 42
  }
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * feet
}

function distanceTravelledInFeet (first, second) {
  if (first > second) {
    return (first - second) * feet
  } else {
    return (second - first) * feet
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start,destination)
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
