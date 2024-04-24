
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
