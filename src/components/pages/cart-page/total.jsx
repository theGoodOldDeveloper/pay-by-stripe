import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const Total = ({ itemCount, total, history, clearCart }) => {
  return (
    <div className="total-container">
      <div className="total">
        {console.log('itemCount: ', itemCount)}
        {console.log('total: ', total)}
        {/* {console.log('history: ', history)} */}
        <p>Total Items {itemCount}</p>
        <p>{`Total: $ ${total}`}</p>
      </div>
      <div className="checkout">
        <button className="button is-black"
          onClick={() => history.push('checkout')}>CHECKOUT</button>
        <button className="button is-white" onClick={() => clearCart()}>CLEAR</button>
        {console.log('history: 😁 ', history)}
      </div>
    </div>
  )
}

//export default Total
export default withRouter(Total)