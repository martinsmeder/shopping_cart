import NavBar from './NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <h1>YOU ARE HOME</h1>
      </div>
    </>
  );
};

export default App;

// import { useEffect, useState } from 'react';

// const fetchImage = () => {
//   const [imageURL, setImageURL] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
//       .then((response) => {
//         if (!response.ok) throw new Error('server error');
//         return response.json();
//       })
//       .then((response) => setImageURL(response[0].url))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return { imageURL, error, loading };
// };

// const fetchData = () => {
//   const [products, setProducts] = useState(null)

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//     .then((response) => response.json())
//     .then((jsonData) => console.log(jsonData))
//   })
// }

// const { imageURL, error, loading } = fetchImage();

// useEffect(() => {
//   fetch(
//     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
//   )
//     .then((response) => response.json())
//     .then((jsonData) => console.log(jsonData));
// });

// if (error) return <p>A network error was encountered</p>;
// if (loading) return <p>Loading...</p>;
