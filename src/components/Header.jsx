import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>SpaceLedger</h1>
      <nav>
        <div className='nav left'>
          <Link to='/'>HOME</Link>
          <Link to='/exchange'>EXCHANGE</Link>
        </div>
        <div className='nav right'>
          <Link to='/cart'>CART</Link>
        </div>
      </nav>
    </header>
  );
}
