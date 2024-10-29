// 

var removeDuplicates = function(nums) {
  let temp=[]
  let j=0
  let k=nums.length
  for(i=0;i<k;i++){
      if(nums[i]!==nums[i+1]){
          temp[j]=nums[i]
          j++
      }
  }
  return temp
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
