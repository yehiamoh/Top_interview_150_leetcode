function lengthOfLastWord(s:string): number {
   let cnt=0;
   for(let i=s.length-1;i>=0;i--){
     if(s[i]===" "&&cnt===0){
       continue;
     }
     else if(s[i]===" "&&cnt>0){
       break;
     }
       cnt++;
     
   }
   return cnt;
};