const sleep = (ms: number = 100) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, ms);
});

export default sleep;
