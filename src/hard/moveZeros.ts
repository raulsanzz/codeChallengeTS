// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {
  let TotalZeros = 0;
  let countZeros = arr.reduce((acc, curr, index) => {
    if (curr === 0) {
      arr.splice(index, 1);
      arr.push(0);
    }
    return TotalZeros;
  });
  return arr;
};
  return false;
};
