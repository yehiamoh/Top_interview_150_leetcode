function wordPattern(pattern: string, s: string): boolean {
   let arr = s.split(" ");
   if (pattern.length !== arr.length) return false; 

   let map = new Map();
   let usedWords = new Set(); 

   for (let i = 0; i < pattern.length; i++) {
      if (!map.has(pattern[i])) {
         if (usedWords.has(arr[i])) return false; 
         map.set(pattern[i], arr[i]);
         usedWords.add(arr[i]);
      } else if (map.get(pattern[i]) !== arr[i]) {
         return false; 
      }
   }
   return true;
};
