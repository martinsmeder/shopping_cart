const testArray = [
  {
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    name: 'bitcoin',
    price: 34970,
    rank: 1,
  },
  {
    image:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
    name: 'ethereum',
    price: 1895.38,
    rank: 2,
  },
  {
    image:
      'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661',
    name: 'tether',
    price: 1,
    rank: 3,
  },
  {
    image:
      'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970',
    name: 'binancecoin',
    price: 251.4,
    rank: 4,
  },
  {
    image:
      'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442',
    name: 'ripple',
    price: 0.712385,
    rank: 5,
  },
];

function parse(arr) {
  return arr
    .filter((item) => item.market_cap_rank <= 50)
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
