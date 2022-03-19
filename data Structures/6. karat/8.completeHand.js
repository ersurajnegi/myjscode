/**
 *In this variant, players have a number of tiles, each marked 0-9. The tiles can be grouped into pairs or triples of the same tile. For example, if a player has "33344466", 
 the player's hand has a triple of 3s, a triple of 4s, and a pair of 6s. Similarly, "55555777" has a triple of 5s, a pair of 5s, and a triple of 7s.

A "complete hand" is defined as a collection of tiles where all the tiles can be grouped into any number of triples (zero or more) and exactly one pair, and each tile is used in exactly one triple or pair.
Write a function that takes a string representation of a collection of tiles in no particular order, and returns true or false depending on whether or not the collection represents a complete hand
 */

tiles1 = '11133555'; // # True.  111 33 555
tiles2 = '111333555'; // # False. There are three triples, 111 333 555 but no pair.
tiles3 = '00000111'; //# True.  000 00 111. Your pair and a triplet can be of the same value
//#        There is also no limit to how many of each tile there is.
tiles4 = '13233121'; // # True.  Tiles are not guaranteed to be in order
tiles5 = '11223344555'; //# False. There cannot be more than one pair
tiles6 = '99999999'; //# True.  You can have many of one tile
tiles7 = '999999999'; //# False.
tiles8 = '9'; //# False.
tiles9 = '99'; //# True.  One pair.
tiles10 = '000022'; //# False.
tiles11 = '888889'; //# False. There cannot be any tiles left over.
tiles12 = '889'; //# False. There cannot be any tiles left over.
tiles13 = '88888844'; //# True.  Two triples and one pair
tiles14 = '77777777777777'; //# True.  Four triples and one pair
tiles15 = '1111111'; //# False.
tiles16 = '1111122222'; //# False.

function complete(title) {
    if (title.length === 1) return false;
    let map = new Map();
    for (let a of title) {
        map.has(a) ? map.set(a, map.get(a) + 1) : map.set(a, 1);
    }
    function helper(val) {
        if (val === 1) {
            return false;
        }
        if (val === 2) {
            if (pairFound) return false;
            pairFound = true;
        }
        return true;
    }

    let pairFound = false;
    for (let [, value] of map) {
        if (value == 2 || value == 1) {
            if (!helper(value)) return false;
        }
        if (value > 3) {
            const remainder = value % 3;
            if (!helper(remainder)) return false;
        }
    }

    return pairFound && true;
}

console.log('1.  :', complete(tiles1)); //=>  1. True
console.log('2.  :', complete(tiles2)); //=>  2. False
console.log('3.  :', complete(tiles3)); //=>  3. True
console.log('4.  :', complete(tiles4)); //=>  4. True
console.log('5.  :', complete(tiles5)); //=>  5. False
console.log('6.  :', complete(tiles6)); //=>  6. True
console.log('7.  :', complete(tiles7)); //=>  7. False
console.log('8.  :', complete(tiles8)); //=>  8. False
console.log('9.  :', complete(tiles9)); //=>  9. True
console.log('10. :', complete(tiles10)); //=> 10.False
console.log('11. :', complete(tiles11)); //=> 11.False
console.log('12. :', complete(tiles12)); //=> 12.False
console.log('13. :', complete(tiles13)); //=> 13.True
console.log('14. :', complete(tiles14)); //=> 14.True
console.log('15. :', complete(tiles15)); //=> 15.False
console.log('16. :', complete(tiles16)); //=> 16.False


/// another solution

/**
 function complete(title) {
    if (title.length === 1) return false;
    let map = {};
    for (let a of title) {
        map[a] ? (map[a] += 1) : (map[a] = 1);
    }

    let pairFound = false;
    let keysArray = Object.keys(map);
    for (let i = 0; i <= keysArray.length; i++) {
        let key = keysArray[i];
        let value = map[key];
        if (value === 1) {
            return false;
        }
        if (value === 2) {
            if (pairFound) return false;
            pairFound = true;
        }
        if (value > 3) {
            const remainder = value % 3;
            map[key] = remainder;
            i--;
        }
    }
    return pairFound && true;
}
 */


//another solution 2.
/**
 function complete(title) {
  if (title.length === 1) return false;
  let map = {};
  for (let a of title) {
    map[a] ? (map[a] += 1) : (map[a] = 1);
  }

  function helper(val) {
    if (val === 1) {
      return false;
    }
    if (val === 2) {
      if (pairFound) return false;
      pairFound = true;
    }
    return true;
  }

  let pairFound = false;
  let keysArray = Object.keys(map);
  for (let i = 0; i <= keysArray.length; i++) {
    let key = keysArray[i];
    let value = map[key];
    if (value == 2 || value == 1) {
      if (!helper(value)) return false;
    }
    if (value > 3) {
      const remainder = value % 3;
      if (!helper(remainder)) return false;
    }
  }

  return pairFound && true;
}
 */