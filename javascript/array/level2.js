
// find the maxNum

// const arr= [3,5,2]

// let max= Math.max(...arr)
// console.log(max)


// another method 

// const arr =[3,5,2]
// let maxNum= arr[0];
// for(let i=0; i<arr.length; i++){
//    if(maxNum<arr[i]){
//     maxNum=arr[i]
//    }
// }
// console.log(maxNum)



//two sum 
// return indecies if the sum is equal to target

function twoSum(arr, target){
   let index= [];
   for(let i=0; i<arr.length; i++){
      for(j=i+1; j<arr.length; j++){
         if(arr[i]+arr[j]==target){
            index.push(arr[i],arr[j])
         }
      }
   }
   return index;
}
console.log(twoSum([2,5,8,4,7,9,6],13))


// Q. Write a function that generates a random alphanumeric string of a given length. 

function randomAlphanumeric(length){

    let char="ABCDEabcde12345";
    let generatedChar=""
     for(i=0;i<=length;i++){
    let randomIndex= Math.floor(Math.random()*char.length+1);
        generatedChar+=char.charAt(randomIndex) 
     }
   return generatedChar
}
console.log(randomAlphanumeric(6))


//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]

const arr=[3,5,2]

const elementToRemove = 2;
  
 const modifiedArr=arr.filter(element=>element!==elementToRemove)
 console.log(modifiedArr)


 //find intersection (common elements) of arr and arr2
//expected output: [5]
const arr1=[3,5,2]
const arr2 = [5,21,32]

// method 1

// let common= []
// for(let element of arr1){
//    if(arr2.includes(element)){
//     common.push(element)
//    }
// }
// console.log(common)

// method 2 
let intersection=[]
for(let i=0; i<arr1.length; i++){
   for(let j=0; j<arr2.length; j++){
      if(arr1[i]===arr2[j]){
         intersection.push(arr1[i])
         break
      }
   }
}
console.log(intersection)