// 1.Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
function checkForEight(num1, num2) {
    if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
      return true;
    } else {
      return false;
    }
  }
  
 
  console.log(checkForEight(4, 8)); // true
  console.log(checkForEight(6, 2)); // true
  console.log(checkForEight(5,3)); // true
  console.log(checkForEight(1,3));// false

  // 2.Write a JavaScript program to convert a given number into hours and minutes.
  function convertTime(num3) {
    const hours=Math.floor(num3/60);
    const minutes = num3%60
    return  `${hours}hours ${minutes}minutes`;
    
  }
  console.log(convertTime(186));
  console.log(convertTime(225));
 

  // 3.Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. 
  //The length must be larger than or equal to 1.
  
  function createArray(Arr) {
    if (Arr.length>=1){
        const first_element=Arr[0];
        const last_elemet=Arr[Arr.length -1];
        return[first_element, last_elemet];

    }else{
    return "Array length must be greater or equal to 1!" ;
    }
  }
  console.log(createArray([2,4,5,7]));
  console.log(createArray([8]));
  console.log(createArray([]));



  // 4.Write a JavaScript program to find the types of a given angle.

///Acute angle: An angle between 0 and 90 degrees.
//Right angle: An 90 degree angle.
//Obtuse angle: An angle between 90 and 180 degrees.
//Straight angle: A 180 degree angle.

function findAngleType(angle) {
    if(angle<90){
    return "Acute angle";
    }else if(angle==90){
        return "Right angle";
    }else if (angle>90 && angle <180){
        return "Obtuse angle" ;
    }else if (angle==180){
         return "Straight angle" ;
    } else 
    return " Reflex angle"  ;

}
console.log(findAngleType(20));
console.log(findAngleType(90));
console.log(findAngleType(120));
console.log(findAngleType(180));
console.log(findAngleType(181));


// 5.What will be logged to the console from the below expression. explain why.


let sum = 5+ 5+"5";

console.log(sum);

// 105 will be the output this is because the first two data types are numbers so we got  their sum,
 //and the last is a string data type so it outputs a string. In JavaScript the operator + performs different operations
 // depending operands this is called type conversion.