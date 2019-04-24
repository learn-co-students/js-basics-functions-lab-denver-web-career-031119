// Code your solution in this file!
function distanceFromHqInBlocks(street){
  if (street >= 42){
     return street - 42
  }else{
     return 42 - street
  }
}


function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street)*264

}

function distanceTravelledInFeet(block1, block2){
  if (block1 > block2){
    return ((block1-block2)*264)
} else {
  return ((block2-block1)*264)
  }
}

function calculatesFarePrice(block1, block2){
  if (distanceTravelledInFeet(block1, block2) < 400){
    return 0}
    else if (distanceTravelledInFeet(block1, block2) >= 400 && distanceTravelledInFeet(block1, block2) < 2000){
      return ((distanceTravelledInFeet(block1, block2)-400)*(0.02))
    }
  else if (distanceTravelledInFeet(block1, block2) > 2000 && distanceTravelledInFeet(block1, block2) < 2500){
    return 25
  }
  else if (distanceTravelledInFeet(block1, block2) > 2500){
      return "cannot travel that far"
    }


}
