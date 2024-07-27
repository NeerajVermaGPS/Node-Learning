function resolvePromise1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 1000);
  });
}
function resolvePromise2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 2000);
  });
}

async function sequentialLoad() {
  const start = Date.now();

  const promise1 = await resolvePromise1();
  const promise2 = await resolvePromise2();

  console.log(promise1);
  console.log(promise2);

  const end = Date.now();
  console.log(`Execution time: ${end - start} ms`);
}

async function concurrentLoad() {
  const start = Date.now();

  const promise1 = resolvePromise1();
  const promise2 = resolvePromise2();

  console.log(await promise1);
  console.log(await promise2);

  const end = Date.now();
  console.log(`Execution time: ${end - start} ms`);
}

async function parallelLoad() {
  const start = Date.now();

  await Promise.all([
    (async () => console.log(await resolvePromise1()))(),
    (async () => console.log(await resolvePromise2()))(),
  ]);

  const end = Date.now();
  console.log(`Execution time: ${end - start} ms`);
}

sequentialLoad();
concurrentLoad();
parallelLoad();
