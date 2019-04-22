// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  return Math.abs(value - 42);
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, end) {
  return ( Math.abs( end - start ) * 264 );
}

function calculatesFarePrice(start, dest) {
  let totalDistance = distanceTravelledInFeet(start, dest);
  if( totalDistance <= 400 ) {
    return 0;
  }
  else if( totalDistance > 400 && totalDistance < 2000 ) {
    return ( (totalDistance - 400) * .02 );
  }
  else if( totalDistance >= 2000 && totalDistance <= 2500 ) {
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
