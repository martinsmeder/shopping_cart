export default function Table({ data, handleClick }) {
  return (
    <table id='tableContainer'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Trade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td className='rank'>{item.rank}</td>
            <td className='name'>
              <img src={item.image} alt={item.name} />{' '}
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </td>
            <td className='price'>{item.price}$</td>
            <td className='buy'>
              {' '}
              <button onClick={handleClick}>Buy</button>{' '}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
