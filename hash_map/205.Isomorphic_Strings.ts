function isIsomorphic(s: string, t: string): boolean {
   if(s.length!==t.length){return false}
   let sMap=new Map();
   let tMap=new Map();
   for(let i=0;i<s.length;i++){
     if(sMap.get(s[i])!==tMap.get(t[i])){
         return false;
     }
     sMap.set(s[i],i)
     tMap.set(t[i],i)
   }
   return true;
 };
  