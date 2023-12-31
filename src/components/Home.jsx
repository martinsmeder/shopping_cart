import Header from './Header';
import Footer from './Footer';

export default function Home({ cartItems }) {
  return (
    <>
      <Header cartItems={cartItems} />
      <main id='homeContainer'>
        <div className='home top'>
          <div className='text top'>
            <h3>Your Premier Crypto Simulation Platform</h3>
            <p>
              The Ledger is your gateway to the exciting world of cryptocurrency
              investment, without any real financial risk. Whether you're a
              seasoned trader looking to refine your strategies or a newcomer
              curious about crypto, our platform provides a risk-free
              environment for you to explore and learn the intricacies of the
              market.
            </p>
          </div>
          <img src='rocket-launch.gif' alt='Rocket Launch' />
        </div>

        <div className='home bottom'>
          <img src='rocket.gif' alt='Rocket' />
          <div className='text bottom'>
            <h3>Immerse Yourself in the Crypto Universe</h3>
            <p>
              At The Ledger, we've meticulously curated a range of simulated
              cryptocurrencies, each mirroring the price of real-world digital
              assets. Our intuitive platform empowers you to simulate buying
              these digital currencies as if you had enough money to do so.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
