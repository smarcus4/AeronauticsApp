const $button = document.getElementById("calcButton");
const $mphButton = document.getElementById("mphButton");
const $finalResult = document.getElementById("finalResult");
const $travelTime = document.getElementById("calcDistance");


$button.addEventListener("click", function makeCalculation(e){


    const $tailWind = document.getElementsByClassName("tailWind")[0].value;
    const $yourSpeed = document.getElementsByClassName("yourSpeed")[0].value;
    


        if(isNaN($tailWind) || isNaN($yourSpeed) || $tailWind<0 || $yourSpeed <0){
            alert("ERROR, please enter a positive number in knots! ");
        }else if($yourSpeed=="" || $tailWind ==""){
            alert("ERROR, you must enter a number and not leave the fields empty!")

        }else if($tailWind.toString().length>5 || $yourSpeed.toString().length>5){
            alert("ERROR, speed is too high for any commercial or sport aircraft, please enter a speed of 5 digits or less in length! Thank you!")
        }else{
            let userInput = prompt("Is this a Tailwind or Headwind?\nEnter 1 for TAILWIND\nEnter 2 for HEADWIND")
            let $finalSpeed=0;
            
            if(userInput==1){

                $finalSpeed = parseInt($tailWind) + parseInt($yourSpeed);
                $finalResult.innerHTML = "Your ground speed with a tailwind in knots: " + $finalSpeed + " kts";
                calcNewSpeed($finalSpeed);
                calcArrivalTime($finalSpeed);
            }else if(userInput==2){
                $finalSpeed = parseInt($yourSpeed) - parseInt($tailWind);
                $finalResult.innerHTML = "Your ground speed with a headwind in knots: " + $finalSpeed + " kts";
                calcNewSpeed($finalSpeed);
                calcArrivalTime($finalSpeed);
            }else{
                alert("ERROR, please enter a 1 or 2 for wind direction");
            }

        }

    
    document.getElementsByClassName("tailWind")[0].value ="";
    document.getElementsByClassName("yourSpeed")[0].value ="";
    


}) 

function calcNewSpeed(finalSpeed){

    $mphButton.addEventListener("click", function convertSpeed(e){


        let mphSpeed = parseInt(finalSpeed)* 1.151
        $finalResult.innerHTML = "Your ground speed in mph: " + mphSpeed.toFixed(2) + " mph" + ` (Was ${finalSpeed} kts)`;
    
    
    })




}

function calcArrivalTime(finalSpeed){
    $travelTime.addEventListener("click", function(e){

        const $distance = document.getElementsByClassName("distance")[0].value;

        let travelTime = $distance/finalSpeed;
        const $displayTime = document.getElementById("finalTime");


        if($distance <0 || $distance>100000){
            alert("It is impossible to travel that distance, please enter a value greater than 0 and less than 100k miles!")
        }else{
            $displayTime.innerHTML= "Estimated Flight time is: " + travelTime.toFixed(2) +" hours"

        }
        document.getElementsByClassName("distance")[0].value=""
        
    })

}




 








