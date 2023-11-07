export default function Popup({ showPopup, submitHandler }) {
  if (showPopup)
    return (
      <div id='popup buy'>
        <h1>STYLE ME</h1>
        <input type='text' />
        <h2>price: </h2>
        <button onClick={submitHandler}>Submit</button>
      </div>
    );
}
