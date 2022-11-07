// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length.  If there are multiple words with the longest length, return the last instance of the word with the longest length.

// EXAMPLE:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

export const longestWord = (stringOfWords: string) => {
  
  let finalStr = stringOfWords.split(' ')
  let max_str = finalStr[0].length;

  let answer = finalStr[0];


  for(let i = 0; i < finalStr.length; i++){
    let maximum = finalStr[i].length;
    if(maximum >= max_str){
      answer = finalStr[i];
      max_str = maximum
    }
  }

return answer
};
