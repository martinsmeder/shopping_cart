function parse(arr) {
  return arr
    .filter((item) => item.market_cap_rank <= 100)
    .map((item) => {
      return {
        rank: item.market_cap_rank,
        name: item.id,
        price: item.current_price,
        image: item.image,
      };
    });
}

export default function getCoins() {
  return fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
  )
    .then((response) => response.json())
    .then((json) => parse(json));
}
