// Code your solution in this file!
 function distanceFromHqInBlocks(block) {
   return Math.abs(block -= 42);
 }

 function distanceFromHqInFeet(feet) {
   return distanceFromHqInBlocks(feet) * 264;
 }

 function distanceTravelledInFeet (begin, end) {
   return  Math.abs(begin - end) * 264;
}

function calculatesFarePrice (begin, end) {
  const distance = distanceTravelledInFeet(begin, end);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }








  // if (distance <= 400) {
  //   return 0;
  // } else if (distance > 400 && distance <= 2000) {
  //   return .02 * (distance - 400);
  // } else if (distance > 2000 && distance < 2500) {
  //   return 25;
  // } else {
  //   return 'cannot travel that far';
  // }
}
