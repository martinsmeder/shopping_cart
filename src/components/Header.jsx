import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header({ cartItems }) {
  return (
    <header>
      <h1>
        <Link to='/'>The Ledger</Link>
      </h1>
      <nav>
        <h2>
          <Link to='/exchange'>Exchange</Link>
        </h2>

        <Link to='/cart'>
          <div className='cartIcon'>
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItems.length > 0 && (
              <div className='cartBadge'>{cartItems.length}</div>
            )}
          </div>
        </Link>
      </nav>
    </header>
  );
}
