const $button = document.getElementById("calcButton");
const $mphButton = document.getElementById("mphButton");
const $finalResult = document.getElementById("finalResult");


$button.addEventListener("click", function makeCalculation(e){


    const $tailWind = document.getElementsByClassName("tailWind")[0].value;
    const $yourSpeed = document.getElementsByClassName("yourSpeed")[0].value;
    


        if(isNaN($tailWind) || isNaN($yourSpeed)){
            alert("ERROR, please enter a number in knots! ");
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
            }else if(userInput==2){
                $finalSpeed = parseInt($yourSpeed) - parseInt($tailWind);
                $finalResult.innerHTML = "Your ground speed with a headwind in knots: " + $finalSpeed + " kts";
                calcNewSpeed($finalSpeed);
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




 








