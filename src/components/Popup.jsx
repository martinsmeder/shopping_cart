export default function Popup({
  showPopup,
  value,
  changeHandler,
  submitHandler,
  priceTotal,
}) {
  if (showPopup)
    return (
      <div id='buyPopup'>
        <h1>Select amount</h1>
        <input type='number' value={value} onChange={changeHandler} />
        <h2>Price: {priceTotal.toFixed(2)}$</h2>
        <button onClick={submitHandler}>Submit</button>
      </div>
    );
}
