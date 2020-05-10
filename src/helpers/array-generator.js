export default (limits) => {
  const genArray = [];
  const [start, end] = limits;

  for (let i = start; i < end + 1; i++) {
    genArray.push(i);
  }

  return genArray;
};
