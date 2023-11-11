import Footer from './Footer';
import Header from './Header';

export default function Cart({
  cartItems,
  sumTotal,
  handleCheckout,
  isCheckedOut,
}) {
  return (
    <>
      <Header />
      <main>
        <div id='cartContainer'>
          {isCheckedOut ? (
            <>
              <h1 className='checkedOut'>Congratulations</h1>
              <img src='thumbs-up.gif' alt='Thumbs Up' />
              <h2 className='checkedOut'>
                Your fake order was successfully processed
              </h2>
            </>
          ) : (
            <>
              <div id='headingContainer'>
                <h1>Summary</h1>
              </div>
              <ul id='cartList'>
                {cartItems.map((item) => (
                  <div key={item.id} className='cart text'>
                    <p>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)} x{' '}
                      {item.amount}
                    </p>
                    <p>{item.price.toFixed(2)}$</p>
                  </div>
                ))}
              </ul>
              <h2 className='cart text'>
                <p>Total</p> <p>{sumTotal.toFixed(2)}$</p>{' '}
              </h2>
              <button onClick={handleCheckout}>Checkout</button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
