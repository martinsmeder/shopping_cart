import Footer from './Footer';
import Header from './Header';

export default function Cart({ cartItems }) {
  return (
    <>
      <Header />

      <main>
        <div id='cartContainer'>
          <h1>Cart:</h1>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} : {item.price}$
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
