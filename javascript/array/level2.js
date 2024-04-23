
// find the maxNum

// const arr= [3,5,2]

// let max= Math.max(...arr)
// console.log(max)


// another method 
const arr =[3,5,2]
let maxNum= arr[0];
for(let i=0; i<arr.length; i++){
   if(maxNum<arr[i]){
    maxNum=arr[i]
   }
}
console.log(maxNum)

