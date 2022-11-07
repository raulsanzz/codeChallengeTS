// DESCRIPTION:
// I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

// NOTES:
// The items and the key will be either an integer or a string (consisting of letters only)
// If the key does not appear in the items, return 0

// EXAMPLE:
// 90000, 0           //returns integer value of 4
// "abcdaaadse", "a"  //returns integer value of 3
// "abcdaaadse", "z"  //returns integer value of 0

export const getConsecutiveItems = (
  items: string | number,
  key: string | number
) => {
  let t = items.toString().split('');
  let k = key.toString().split('');
  let result = [];
  let counter = 1;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === t[i + 1] && k == t[i]) {
      counter++;
    } else {
      result.push(counter);
      counter = 1;
    }
  }
  let finalArray = result;
  let max = 0;
  for (let i = 0; i < finalArray.length; i++) {
    if (finalArray[i] > max) {
      max = finalArray[i];
    }
  }
  return max;
};
