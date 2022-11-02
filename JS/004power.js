"use strict"
/*
function saveInfo(){
    let powerA = document.getElementById("powerA").value;//Base
    let powerB = document.getElementById("powerB").value;//Exponente

}
*/

//Funcion con bucles

function calculatePower(){
    
    let powerA = document.getElementById("powerA").value;//Base
    let powerB = document.getElementById("powerB").value;//Exponente
    let r 

    do{
        for(let i = powerB; i > 0; i--){
            r = r * powerA;
        }
        console.log(r);
        break;
    } while (powerA && powerB >= 1);
}

//Funcion con Math

function calculateMath() {

    let powerA = document.getElementById("powerA").value;//Base        
    let powerB = document.getElementById("powerB").value;//Exponente


    do {
        Math.pow(powerA , powerB);  
        console.log(Math.pow(powerA , powerB));
        break;
    } while (powerA && powerB >= 1);

}