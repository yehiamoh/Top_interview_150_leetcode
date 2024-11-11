function majorityElement(nums: number[]) {
   //BOYER-MOORE ALGORITHM
let res=0;
let count=0;
for(const n of nums){
   if(count===0){
       res=n
   }
   if(res===n){
       count+=1
   }else{
       count-=1;
   }
}
return res;
}