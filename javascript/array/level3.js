// find the first palindrom string from the given array of string 

// example 
// let array= ["ram","mom","car","well"]
// expectedOut="mom"

// implement a function for that above scenario

function findString(array){
   
    // here we also need inner helper function to check string is palindrome or not

    function isPalindrome(str){
       let reverseStr= str.split("").reverse().join("")
       return reverseStr===str
    }
    
    // now traverse through the array 
       
    for(let i=0; i<array.length; i++)
        {
        if(isPalindrome(array[i]))  // Return the first palindrome found
            {
             return array[i]
          }
       }
    return ""; // Return an empty string if no palindrome is found
}

let array= ["ram","mom","car","well"]
console.log(findString(array))