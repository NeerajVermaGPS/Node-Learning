const promises = require("../CJS-Modules/promises");

const loadPromises = () => {
  let arr = [];
  for (let index = 0; index < 5; index++) {
    const element = parseInt(Math.random() * 20 + 1);
    console.log(element);
    const promise = promises(element, 10);
    arr.push(promise);
  }

  Promise.allSettled(arr).then((resps) => {
    console.log("\nAll Settled start");
    resps.map((resp) => {
      console.log(
        "Promise " + resp.status + " with message:",
        resp.value || resp.reason.message
      );
    });
    console.log("All Settled ends\n");
  });

  Promise.all(arr)
    .then((resp) => {
      console.log("Success in All: " + resp);
    })
    .catch((err) => {
      console.log("Error in All: " + err.message);
    });

  Promise.race(arr)
    .then((resp) => {
      console.log("Success in Race: " + resp);
    })
    .catch((err) => {
      console.log("Error in Race: " + err.message);
    });

  Promise.any(arr)
    .then((resp) => {
      console.log("Success in Any: " + resp);
    })
    .catch((err) => {
      console.log("Error in Any: " + err.message);
    });
};

loadPromises();

const loadPromises2 = async () => {
  const element = parseInt(Math.random() * 20 + 1);
  console.log(element);

  try {
    let promise = await promises(element, 100);
    console.log(promise);
  } catch (e) {
    console.log(e.message);
  }
};

console.log(loadPromises2())