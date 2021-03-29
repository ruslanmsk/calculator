export default (input) => {
  const tokens = input.split(' ');

  if (tokens.length === 2) {
    const [operator, right] = tokens;
    return [NaN, parseInt(right, 10), operator];
  }

  const [left, operator, right] = tokens;

  return [parseInt(left, 10), parseInt(right, 10), operator];
};
