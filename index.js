// Code your solution in this file!
function distanceTravelledInFeet(start, stop)
{
  return Math.abs((stop - start) * 264);
}

function distanceFromHqInBlocks(block)
{
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(blocks)
{
  return distanceFromHqInBlocks(blocks) * 264;
}

function calculatesFarePrice(start, destination)
{
  let feet = distanceTravelledInFeet(start, destination)
  switch(true){
    case (feet < 400):
      return 0;
    case (feet > 2500):
      return "cannot travel that far";
    case (feet > 2000):
      return 25;
    default:
      return (feet-400) * .02;
  }
}
