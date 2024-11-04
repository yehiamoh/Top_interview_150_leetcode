/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
   let i = m - 1;
   let j = n - 1;
   // last index in num1
   let k = m + n - 1;
   // mergre in reverse order
   while (j >= 0 && i >= 0) {
      if (nums2[j] > nums1[i]) {
         nums1[k] = nums2[j];
         k--;
         j--;
      } else {
         nums1[k] = nums1[i];
         k--;
         i--;
      }
   }
   //fill num1 with leftover num2
   while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
   }
}
