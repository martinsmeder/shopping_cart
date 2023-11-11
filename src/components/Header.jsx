import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header({ cartItems }) {
  return (
    <header>
      <h1>SpaceLedger</h1>
      <nav>
        <div className='nav left'>
          <Link to='/'>HOME</Link>
          <Link to='/exchange'>EXCHANGE</Link>
        </div>
        <div className='nav right'>
          <Link to='/cart'>
            <div className='cartIcon'>
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartItems.length > 0 && (
                <div className='cartBadge'>{cartItems.length}</div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
