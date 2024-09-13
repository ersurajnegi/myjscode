//Fetch with Timeout

// function fetchWithTimeout(timeout) {
//   return new Promise((resolve, reject) => {
//     const timer = setTimeout(() => {
//       reject('Request timed out');
//     }, timeout);

//     fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
//       clearTimeout(timer);
//       resolve(data);
//     });
//   });
// }

async function fetchWithTimeout(timeout) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      { signal: controller.signal }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function test() {
  try {
    const fetchW = await fetchWithTimeout(10);
    const data = await fetchW.json();
    console.log("data received : ", data);
  } catch (error) {
    console.log("error : ", error);
  }
}

test();
