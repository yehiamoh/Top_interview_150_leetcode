function strStr(haystack: string, needle: string): number {
   for(let i=0;i<haystack.length-needle.length+1;i++){ // we will stop at the last possible elemnt in the haystack that can form a needle string in the leetcode ex index=6
       for(let j=0;j<needle.length;j++){
           if(haystack[i+j]!==needle[j]){ //comparing the haystack with the needle
               break;
           }
           if(j===needle.length-1){ // if we didnot break form the loop and reach to the last index that mean we found the needle then we will return i which is the first character in the haystack substring
               return i; 
           }
       }
   }
   return -1;
};