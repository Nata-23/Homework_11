"use strict";
//1
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 5000);
});
// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Promise was finished!"));

//2 async / await
async function getPromise() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Promise was finished!");
  }
}

getPromise();
