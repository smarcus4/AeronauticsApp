const $button = document.getElementById("calcButton");

$button.addEventListener("click", function makeCalculation(e){


    const $tailWind = document.getElementsByClassName("tailWind")[0].value;
    const $yourSpeed = document.getElementsByClassName("yourSpeed")[0].value;
    const $finalResult = document.getElementById("finalResult");


        if(isNaN($tailWind) || isNaN($yourSpeed)){
            alert("ERROR, please enter a number in knots! ");
        }else if($yourSpeed=="" || $tailWind ==""){
            alert("ERROR, you must enter a number and not leave the fields empty!")

        }else if($tailWind.toString().length>5 || $yourSpeed.toString().length>5){
            alert("ERROR, speed is too high for any commercial or sport aircraft")
        }else{

            const $finalSpeed = parseInt($tailWind) + parseInt($yourSpeed);
            $finalResult.innerHTML = "Your speed in knots: " + $finalSpeed;

        }

    
    document.getElementsByClassName("tailWind")[0].value ="";
    document.getElementsByClassName("yourSpeed")[0].value ="";


}) 

 








