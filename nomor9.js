function searchLowHigh(arr) {
  let low = arr[0];
  let high = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    } else if (arr[i] > high) {
      high = arr[i];
    }
  }

  return { low, high };
}
