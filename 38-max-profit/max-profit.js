// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock.

// TODO: Complete the function below:

var maxProfit = function (prices) {
  let low = Infinity;
  let high = 0;
  for (let i=0; i<prices.length; i++) {
    if (prices[i] > high) {
      high = prices[i];
    } if (prices[i] < low) {
      low = prices[i];
      high = prices[i];
    }
  }
  return high - low;
};
