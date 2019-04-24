// Code your solution in this file!
let blockLengthInFeet = 264;

function distanceFromHqInBlocks(number) {
  let start = 42;
  return Math.abs(start - number);
}

function distanceFromHqInFeet(number) {
  return distanceFromHqInBlocks(number) * blockLengthInFeet;
}

function distanceTravelledInFeet(start, stop) {
  return Math.abs(start - stop) * blockLengthInFeet;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let baseCostPerMile = 0.02;
  let longDistanceFareRate = 25.00;
  if (distance > 0 && distance <= 400) {
    return 0;
  }else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * baseCostPerMile;
  }else if (distance > 2000 && distance < 2500) {
    return longDistanceFareRate;
  }else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
