
function distanceFromHqInBlocks(distanceInBlocks) {
    if (distanceInBlocks < 42) {
      return 42-distanceInBlocks;
    }
    else{
      return (distanceInBlocks-42 );
    }
    }
    function distanceFromHqInFeet(distanceInBlocks) {
        let distanceInFeet = distanceFromHqInBlocks(distanceInBlocks);
        return distanceInFeet * 264; 
      }
      function distanceTravelledInFeet(start,destination) {
    if(start>destination){
        return ((start-destination)*264);
    }else if(start<destination){
        return((destination - start )*264);}
        
        }  

function calculatesFarePrice(start, destination) {
let totalDistance=distanceTravelledInFeet(start,destination)
if(totalDistance<=400 ){
    return 0;
}else if(totalDistance>400 && totalDistance<=2000){
    return ((totalDistance-400)*0.02);
}
else if(totalDistance>=2000 && totalDistance<2500){
    return 25;
}
else if(totalDistance>=2500){
    return`cannot travel that far`
}}