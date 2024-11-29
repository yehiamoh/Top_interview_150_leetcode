function twoSum(numbers: number[], target: number){
   let l=0;
   let r=numbers.length-1;
   while(r>=l){
       const sum = numbers[l]+numbers[r]
       if(sum<target){
           l++;
       }else if(sum>target){
           r--;
       }else{
           return [l+1,r+1]
       }
   }
};