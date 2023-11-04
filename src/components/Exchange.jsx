import { useEffect, useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import getCoins from './api';

export default function Exchange() {
  const [coinData, setCoinData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCoins()
      .then((data) => setCoinData(data))
      .then(() => console.log(coinData))
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>A network error occured: {error}</p>;

  return (
    <>
      <Header />
      <main>
        {coinData.map((item) => (
          <div key={item.rank}>
            <p>{item.rank}</p>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}$</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
