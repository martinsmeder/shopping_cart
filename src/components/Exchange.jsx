import { useEffect, useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import getCoins from './api';
import Table from './Table';

export default function Exchange({ cartItems, handleClick }) {
  const [coinData, setCoinData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCoins()
      .then((data) => setCoinData(data))
      .then(() => console.log(coinData))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error occured: {error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <main id='exchangeContainer'>
        <h1>REMOVE ME</h1>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} : {item.price}$
            </li>
          ))}
        </ul>

        <Table data={coinData} handleClick={handleClick} />
      </main>
      <Footer />
    </>
  );
}
