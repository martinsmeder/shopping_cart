import Footer from './Footer';
import Header from './Header';

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
                  <div key={item.id} className='cart item'>
                    <p>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)} x{' '}
                      {item.amount}
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
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
