const getAverage = (ratings) => {
  let reviews = 0;
  let total = 0;

  const values = Object.values(ratings);
  for (let val of values) {
      reviews += Number(val);
  }
  for (let star in ratings) {
      total += Number(star) * Number(ratings[star]);
  }

  return total / reviews;
}

export default getAverage;