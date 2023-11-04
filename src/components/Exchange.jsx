import { useEffect, useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import getCoins from './api';
import Table from './Table';

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
        <Table data={coinData} />
      </main>
      <Footer />
    </>
  );
}
