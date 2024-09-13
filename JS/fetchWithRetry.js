async function fetchWithRetry(url, options = {}, retries = 3, backoff = 300) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Network response was not ok");
    return response;
  } catch (error) {
    if (retries > 0) {
      console.log(`Retry ${retries} times...`);
      // await new Promise((resolve) => setTimeout(resolve, backoff));
      return fetchWithRetry(url, options, retries - 1, backoff * 2);
    } else {
      throw error;
    }
  }
}

async function test() {
  try {
    const response = await fetchWithRetry(
      "https://jsonplaceholder.typicode.com/todos/1",
      {},
      3,
      500
    );
    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

test();

/////////
//Given an array of strings, group the anagrams together. You can return the answer in any order.
//Example 1:

// Input: strs = ["eat","tan","ate","nat","bat","tea"]
//["aet","ant","aet","ant","abt","aet"]

function Test(inputArray) {
  let sortedInputArray = ["aet", "ant", "aet", "ant", "abt", "aet"];
  let result = [];
  let sortedResult = [];

  sortedInputArray.forEach((input, index) => {
    //n
    let isSubArrrayHavingInputStringPresent = false;
    sortedResult.forEach((res, i) => {
      //k
      if (res.includes(input)) {
        result[i] = [...result[i], input];
        res.push(input);
        isSubArrrayHavingInputStringPresent = true;
      }
    });

    if (!isSubArrrayHavingInputStringPresent) {
      result.push([inputArray[index]]);
      sortedResult.push([input]);
    }
  });
  return result;
}
