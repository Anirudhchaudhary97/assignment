
//Q1 calculate length of array and console log
//expected output is 3
const arr =[3,5,2]

let l=arr.length
console.log(l)

//Q2 reverse the array and console log
//expected output [2,5,3]

const backup= [...arr]
let reverse= backup.reverse()
console.log(reverse);


///Q3 join the array and console log
// expected output 352  or 253

let joinNum=arr.join("")
  console.log(parseInt(joinNum))


  
//Q4 Remove the last element from the array and log the modified array to the console

const array=[3,5,2]
const remove=array.pop()
console.log(array)


// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.



const num = [6,4,2,8,10,12]

let alleven=true
for(let i=0;i<num.length;i++){
  if(num[i]%2!==0){
       alleven=false
       break
  }
 
}
 if(alleven){
    console.log("all even")
  }else{
    console.log("not all even")
  }



  // Find the index of a specific element in the array. Log the index to the console. 
//expected output: 2

const allNum = [3, 5, 2, 8, 5];
const searchElement = 3;

for(i=0; i<allNum.length;i++){
  if(allNum[i]===searchElement){
     console.log(i)
  }  
}
