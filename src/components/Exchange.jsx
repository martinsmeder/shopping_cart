import { useEffect, useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import getCoins from './api';
import testArray from './testData';
import Table from './Table';
import Popup from './Popup';

export default function Exchange({
  cartItems,
  clickHandler,
  changeHandler,
  submitHandler,
  priceTotal,
  showPopup,
  value,
}) {
  const [coinData, setCoinData] = useState(testArray);
  // const [coinData, setCoinData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getCoins()
  //     .then((data) => setCoinData(data))
  //     .then(() => console.log(coinData))
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // }, []);

  // if (error) return <p>A network error occured: {error}</p>;
  // if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <main id='exchangeContainer'>
        <Popup
          showPopup={showPopup}
          value={value}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          priceTotal={priceTotal}
        />
        <Table data={coinData} clickHandler={clickHandler} />
      </main>
      <Footer />
    </>
  );
}
