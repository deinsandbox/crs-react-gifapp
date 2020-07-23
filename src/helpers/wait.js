export const wait = (seconds, callback) => {
  setTimeout(() => {
    callback();
  }, seconds * 1000);
};
