export function incrementAmount(arr, item) {
  const cartItemsCopy = [...arr];
  const index = cartItemsCopy.findIndex(
    (cartItem) => cartItem.name === item.name
  );
  cartItemsCopy[index].amount += 1;
  return cartItemsCopy;
}

export function getSumTotal(arr) {
  const sums = [];
  arr.forEach((item) => {
    const sum = item.amount * item.price;
    sums.push(sum);
  });
  if (sums.length > 0) return sums.reduce((acc, curr) => acc + curr);
}
