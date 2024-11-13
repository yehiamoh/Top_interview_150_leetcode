function maxProfit(prices: number[]): number {
  let l = 0;
  let r = 1;
  let maxProfit = 0;
  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      maxProfit = Math.max(prices[r] - prices[l], maxProfit);
    } else {
      l = r;
    }
    r += 1;
  }
  return maxProfit;
}
