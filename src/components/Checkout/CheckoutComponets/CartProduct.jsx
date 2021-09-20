import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/Context";

function CartProduct({ amt, total, price, title, img, id }) {
  const { cart, dispatch } = useContext(GlobalContext);

  const operation = (sign) => {
    const newCart = cart.map((item) => {
      if (id === item.id) {
        // eslint-disable-next-line no-unused-expressions
        sign === "-" && amt > 1 ? (item.amount -= 1) : null;
        if (sign === "+") item.amount += 1;
        return item;
      } else {
        return item;
      }
    });
    return newCart;
  };

  const decrement = () => {
    dispatch({ type: "UPDATE_CART_ITEM", payload: operation("-") });
  };
  let increment = () => {
    dispatch({ type: "UPDATE_CART_ITEM", payload: operation("+") });
  };

  return (
    <tr>
      <td class="product-thumbnail  text-left">
        {/* <!-- Single-product start --> */}
        <div class="single-product d-flex align-items-center">
          <div class="product-img">
            <a href="single-product.html">
              <img src={img} alt="" />
            </a>
          </div>
          <div class="product-info">
            <h4 class="post-title">
              <a class="text-light-black" href="#">
                {title}
              </a>
            </h4>
            <p class="mb-0">Color : Black</p>
            <p class="mb-0">Size : SL</p>
          </div>
        </div>
        {/* <!-- Single-product end -->	*/}
      </td>

      <td class="product-price">${price}</td>

      <td class="product-quantity">
        <div class="cart-plus-minus">
          <div onClick={decrement} class="dec qtybutton">
            -
          </div>
          <input type="text" value={amt} class="cart-plus-minus-box" />
          <div onClick={increment} class="inc qtybutton">
            +
          </div>
        </div>
      </td>

      <td class="product-subtotal">${total()}</td>

      <td class="product-remove">
        <a href="#">
          <i class="zmdi zmdi-close"></i>
        </a>
      </td>
    </tr>
  );
}

export default CartProduct;
