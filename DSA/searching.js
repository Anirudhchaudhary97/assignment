
// topic Searching


// 1. binarySearch 
// Binary Search is only apply on sorted array
// first we find middle index (m=(l+h)/2) 
// then comapre with key 


//example

function binarySearch(array, key){
    let low=0;
  let high=array.length-1;
  while(low<=high){
    let mid = Math.floor((low+high)/2)
    if(array[mid]===key){
      return 1
    }
    else if(array[mid]<key){
      low=mid+1
    }
    else{
      high=mid-1
    }
  }
  return -1
}
console.log(binarySearch([1,2,3,4,5],5))



// 2. linear Search 
function linearSearch(array, key){
    for(let i=0; i<array.length; i++){
      if(array[i]===key){
        return 1
      }
    }
    return -1
    
  }
  console.log(linearSearch([2,3,1,5,6,8],7))
