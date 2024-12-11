function groupAnagrams(strs: string[]): string[][] {
   const map :Map<string,string[]>=new Map();
   for(const str of strs){
     const s=str.split('').sort().join('');
     if(!map.has(s)){
         map.set(s,[str])
     }else{
         map.get(s)!.push(str)
     }
   }
   return Array.from(map.values())
 }
 