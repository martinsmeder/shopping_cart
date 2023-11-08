export default function Popup({
  showPopup,
  changeHandler,
  submitHandler,
  priceTotal,
}) {
  if (showPopup)
    return (
      <div id='popup buy'>
        <h1>STYLE ME</h1>
        <input type='number' onChange={changeHandler} />
        <h2>Price: {priceTotal.toFixed(2)}$</h2>
        <button onClick={submitHandler}>Submit</button>
      </div>
    );
}