import { useEffect, useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import getCoins from './api';

export default function Exchange() {
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
        <table id='tableContainer'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {coinData.map((item) => (
              <tr>
                <td className='rank'>{item.rank}</td>
                <td className='name'>
                  <img src={item.image} alt={item.name} />{' '}
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </td>
                <td className='price'>{item.price}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
}
