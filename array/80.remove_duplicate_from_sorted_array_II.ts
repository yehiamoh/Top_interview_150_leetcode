function removeDuplicates2(nums: number[]): number {
   let r=0;
   let l=0;

   while(r<nums.length){
       let count=1;
       while(r+1<nums.length && nums[r]===nums[r+1]){
           r+=1;
           count+=1;
       }
       for(let i=0;i<Math.min(2,count);i++){
           nums[l]=nums[r];
           l+=1;
       }
       r+=1;
   }
   return l;
};