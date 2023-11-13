import Header from './Header';
import Footer from './Footer';

export default function Cart({
  cartItems,
  sumTotal,
  handleDelete,
  handleCheckout,
  isCheckedOut,
}) {
  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        <div id='cartContainer'>
          {isCheckedOut ? (
            // If checkout button is clicked...
            <>
              <h2 className='text'>
                It is with great pleasure that I extend my sincerest
                congratulations unto you.
              </h2>
              <img className='image' src='thumbs-up.gif' alt='Thumbs Up' />
              <h3 className='text'>
                Be informed that your simulated transaction has been executed
                with consummate success. Should you require further assistance
                or consideration, we stand ready to serve you with the utmost
                diligence.
              </h3>
            </>
          ) : (
            <>
              {cartItems.length > 0 ? (
                // If items exist in cart
                <>
                  <div id='headingContainer'>
                    <h1>Summary</h1>
                  </div>
                  <ul id='cartList'>
                    {cartItems.map((item) => (
                      <div key={item.id} className='cart item'>
                        <p>
                          {item.name.charAt(0).toUpperCase() +
                            item.name.slice(1)}{' '}
                          x {item.amount}
                        </p>
                        <div className='priceAndDelete'>
                          <p>{item.price.toFixed(2)}$</p>
                          <img
                            className='deleteIcon'
                            onClick={() => handleDelete(item)}
                            src='delete.png'
                            alt='Delete'
                          />
                        </div>
                      </div>
                    ))}
                  </ul>
                  <h2 className='cart total'>
                    <p>Total</p> <p>{sumTotal.toFixed(2)}$</p>{' '}
                  </h2>
                  <button id='checkoutBtn' onClick={handleCheckout}>
                    Checkout
                  </button>
                </>
              ) : (
                // If cart is empty
                <>
                  <h2 className='text'>
                    Regrettably, it appears that your cart is bereft of
                    acquisitions.
                  </h2>
                  <img
                    className='image'
                    src='empty-cart.png'
                    alt='Empty Cart'
                  />
                  <h3 className='text'>
                    May I kindly suggest perusing our esteemed selection of
                    cryptocurrencies to rectify this situation? Your
                    satisfaction is our utmost priority.
                  </h3>
                </>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
