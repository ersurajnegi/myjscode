//find any word from jumbled string if in array, return it or return null

const words = ['cat', 'baby', 'bird1', 'axe', 'suraj'];
const str = 'bahhjkdsbylirdxujc';

function find(arr, testStr) {
  let strMap = {};
  let wordToReturn = null;
  for (let a of testStr) {
    strMap[a] ? (strMap[a] += 1) : (strMap[a] = 1);
  }
  for (let item of arr) {
    let itemMap = {};
    let wordFound = true;

    for (let a of item) {
      itemMap[a] ? (itemMap[a] += 1) : (itemMap[a] = 1);
    }

    for (const c in itemMap) {
      if (!strMap[c] || itemMap[c] > strMap[c]) {
        wordFound = false;
        break;
      }
    }
    if (wordFound) {
      wordToReturn = item;
      break;
    }
  }
  return wordToReturn;
}

console.log(find(words, str));
