/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
   k=k%nums.length;// to make sure that we arenot making rotation not required (if lenght=4,k=4  then the array will be the same )
   reverse(nums,k);
   reverseFirstKElemnt(nums,k);
   reverseRemaningElemnt(nums,k);
  };
   
  const reverse =(nums:number[],k:number)=>{
      let l=0;
      let r=nums.length-1;
      while(r>l){
         // Destructuring assignment for swapping values
          [nums[r],nums[l]]=[nums[l],nums[r]];
           l++;
          r--;
      }
  }
  const reverseFirstKElemnt=(nums:number[],k:number)=>{
      let l=0;
      let r=k-1;
      while(r>l){
          [nums[r],nums[l]]=[nums[l],nums[r]];
          l++;
          r--;
      }
  }
  const reverseRemaningElemnt=(nums:number[],k:number)=>{
      let l=k;
      let r=nums.length-1;
      while(r>l){
          [nums[r],nums[l]]=[nums[l],nums[r]];
          l++;
          r--;
      }
  }