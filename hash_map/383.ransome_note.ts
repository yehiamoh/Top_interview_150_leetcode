function canConstruct(ransomNote: string, magazine: string): boolean {
   let ransomMap =new Map();
   let magazineMap =new Map();
   let flag=true;
   if(ransomNote.length > magazine.length){
       return false;
   }
   for(let s of ransomNote){
       ransomMap.set(s,(ransomMap.get(s)||0)+1);
   }
   for(let s of magazine){
       magazineMap.set(s,(magazineMap.get(s)||0)+1);
   }
   for(let [key,value] of  ransomMap){
       if(value>magazineMap.get(key)||magazineMap.get(key)=== undefined){
           flag=false;
       }
   } 
   return flag;
} 