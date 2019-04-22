function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(firstBlock, secondBlock) {
  return Math.abs((secondBlock - firstBlock) * 264);
}

function calculatesFarePrice(start, destination) {
  let totalDistance = distanceTravelledInFeet(start, destination);
  if (totalDistance > 2500) {
    return 'cannot travel that far';
  } else if (totalDistance < 400) {
    return 0;
  }
  else {
      if (totalDistance > 2000) {
        return 25;
      } else {
        return (totalDistance - 400) * 0.02;
      }
  }


}
