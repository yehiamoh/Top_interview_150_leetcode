function canJump(nums: number[]): boolean {
   if(nums.length===1){
       return true
   }
   let farthest=0 
 for(let i=0;i<=farthest;i++){
   farthest= Math.max(farthest,nums[i]+i)
   if(farthest>=nums.length-1){
       return true
   }
 }
 return false
};