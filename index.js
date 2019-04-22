// Code your solution in this file!
function distanceFromHqInBlocks(address){
  let distance = Math.abs(42 - address);
  return distance;
}

function distanceFromHqInFeet(address){
  let distanceInBlocks = distanceFromHqInBlocks(address)
  let distanceInFeet = distanceInBlocks *264
  return distanceInFeet
}



function distanceTravelledInFeet(blockOne, blockTwo){
let feet = Math.abs(blockOne - blockTwo) * 264;
return feet
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance < 2000){
      return .02 * (distance - 400);
    } else if (distance >= 2000 && distance <2500) {
      return 25;
    } else{
      return 'cannot travel that far';
    }


}
