function countOccurrences(string) {
  let convertedToArray = [];
  for (let str of string) {
    convertedToArray.push(str);
  }

  let arrSorted = convertedToArray.sort();

  let occurrencesCounted = [];

  while (0 < arrSorted.length) {
    let i = 0;
    while (arrSorted[0] === arrSorted[i]) {
      i++;
    }
    occurrencesCounted.push([arrSorted[0], i]);
    arrSorted.splice(0, i);
  }
  console.log(occurrencesCounted);
}

countOccurrences(
  "What is the number of occurrences in the sentences of this function argument?"
);
