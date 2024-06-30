window.onload = function() {

    let students = [['Bob', 99], ['Alex', 85], ['Carmine', 44],['Dylan', 66], ['Eva', 76] ]; //array used in getGrade function

 function getGrade() {
     let msg = ''; //creates the variable msg, outside of for in function to allow it to repeat without being overwritten

for(let i = 0;  i < students.length; i++) { //i is used as the initialization of the array. sets condition of +1 for array count stopping at the array legnth/
    let score = students[i][1];
    let name = students[i][0];
if (score >= 90 && score <= 100) {  //range for the grade A
 msg += `${name} got an A with a score of ${score}<br>`;  //creates the message for grades with an A 
} else if (score >= 80 && score <= 89) {  //range for the grade B
     msg += `${name} got a B with a score of ${score}<br>`; //creates the message for grades with an B 
} else if (score >= 70 && score < 80){ //range for the grade C
     msg += `${name} got a C with a score of ${score}<br>`; //creates the message for grades with an C 
} else if (score >= 60 && score <70){ //range for the grade D
     msg += `${name} got a D with a score of ${score}<br>`; //creates the message for grades with an D  
} else { //range for the grade F
     msg += `${name} got an F with a score of ${score}<br>`; //creates the message for grades with an F 
}

 }
 document.getElementById("result").innerHTML = msg;

}
getGrade();

}