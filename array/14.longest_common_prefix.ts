function longestCommonPrefix(strs: string[]): string {
   let longestPrefix=strs[0];
   for(let str of strs){
       while(!str.startsWith(longestPrefix)){
           longestPrefix=longestPrefix.substring(0,longestPrefix.length-1)
       }
   }
   return longestPrefix;
   
};