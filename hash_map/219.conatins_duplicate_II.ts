function containsNearbyDuplicate(nums: number[], k: number): boolean {
   const indexMap=new Map();
       for(let i=0;i<nums.length;i++){
          if(indexMap.has(nums[i])){
           if(Math.abs(indexMap.get(nums[i])-i)<=k){
               return true;
           }
          }
          indexMap.set(nums[i],i)
   
       }
     return false;
   };