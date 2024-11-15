function romanToInt(s: string): number {
   let outPut = 0;
const romanMap: { [key: string]: number } = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

for (let i = 0; i < s.length; i++) {
  // Check if the next Roman numeral is larger (and ensure we don't go out of bounds)
  if (romanMap[s[i]] < romanMap[s[i + 1]] && i + 1 < s.length) {
    outPut -= romanMap[s[i]];
  } else {
    outPut += romanMap[s[i]];
  }
}
return outPut;
};