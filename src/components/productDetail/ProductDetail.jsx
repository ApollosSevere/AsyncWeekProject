import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
// import { UserProvider } from '../../Contex/Context';
import { GlobalContext } from "../../Context/Context";

// import { Cart } from '../../Contex/Context';

function ProductDetail() {
  const { products, addToCart, cart, dispatch } = useContext(GlobalContext);
  // console.log(products)
  // console.log("Curent Cart: ",cart)

  // console.log(addToCart)
  // const { addToCart }  = useContext(GlobalContext);
  const [quantity, setQuantity] = useState("");
  const handleChange = ({ value }) => {
    setQuantity(value);
  };
  let yo = useParams();
  console.log(yo);
  // console.log("Things: ",yo);
  // console.log("id", id.productObject)
  // console.log("jjddjdjdjdj", id)
  let product = products.filter((v) => v.id === Number(yo.id));
  // let product1 = useParams()
  // console.log(product1)
  product[0].amount = 1;
  product[0].total = () => product[0].amount * product[0].price;
  let { img, price, text, title } = product[0];
  // console.log(product[0])
  const addProduct = () => {
    for (let i = 0; i < cart.length; i++) {
      let thing = cart[i];
      if (product[0] === thing) {
        return null;
      }
    }
    addToCart(product[0], dispatch);
  };
  return (
    <div className="main-content1">
      {/* <div>Global Products In Stock: {JSON.stringify(cart)}</div>
            <div>Current Cart: {JSON.stringify(products)}</div> */}
      <div className="row">
        <div className="col-3 float-left">
          <div className="btnM">
            <Link to="/checkout">CHECK OUT</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="containerP">
          <div className="shop-detail">
            <div className="row">
              {/* Popular Images Slider */}
              <div className="col-md-7 leftDetail">
                <div class="images-slider">
                  <ul class="slides">
                    <li style={{ display: "block" }}>
                      {" "}
                      <img class="img-responsive" src={img} alt="" />{" "}
                    </li>
                    <li data-thumb="images/large-img-2.jpg">
                      {" "}
                      <img
                        class="img-responsive"
                        src="images/large-img-2.jpg"
                        alt=""
                      />{" "}
                    </li>
                    <li data-thumb="images/large-img-3.jpg">
                      {" "}
                      <img
                        class="img-responsive"
                        src="images/large-img-3.jpg"
                        alt=""
                      />{" "}
                    </li>
                  </ul>
                  <div className="buffer"></div>
                  <div className="photos d-flex align-items-center justify-content-center ">
                    <div className="featured d-flex align-items-center">
                      <div className="featured-Item">
                        <img
                          class="img-responsive"
                          src="/images/large-img-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="featured-Item active">
                        <img
                          class="img-responsive"
                          src="/images/large-img-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="featured-Item">
                        <img
                          class="img-responsive"
                          src="/images/large-img-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="col-md-5 rightDetail">
                <h4>{title}</h4>
                <div className="priceDetail">
                  <small>$</small> {price}{" "}
                </div>
                <div className="productBager badge">
                  <div>10%</div>
                  <div>OFF</div>
                </div>

                <ul class="item-owner">
                  <li>
                    Designer :<span> ABC Art</span>
                  </li>
                  <li>
                    Brand:<span> LimeWood</span>
                  </li>
                </ul>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum finibus ligula a scelerisque gravida. Nullam
                  laoreet tortor ac maximus alique met, consectetur adipiscing
                  elit. Vestibulum finibus ligula a scelerisque gravida. Nullam
                </p>

                {/* Ok, so this is an interesting design session, pay attention 
                                so that you can learn and suck in the convention used here!
                                */}

                {/* Ok, so this design here could be convention for nice little designs, or grid type designs in little areas, *think mordern and 
                                classy when you make these things :) */}
                <div className="some-info">
                  <div className="row hehe">
                    <div className="col-4">
                      <div className="btn-large">
                        <select
                          className="quinty"
                          value={quantity}
                          onChange={handleChange}
                          name="favColor"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-8">
                      <ul className="colors-shop">
                        <li>
                          <span className="mr-20">Colors :</span>
                        </li>
                        <div className="line-up">
                          <li>
                            <a href="#." style={{ background: "#958170" }}></a>
                          </li>
                          <li>
                            <a href="#." style={{ background: "#c9a688" }}></a>
                          </li>
                          <li>
                            <a href="#." style={{ background: "#c9c288" }}></a>
                          </li>
                          <li>
                            <a href="#." style={{ background: "#a7c988" }}></a>
                          </li>
                          <li>
                            <a href="#." style={{ background: "#9ed66b" }}></a>
                          </li>
                          <li>
                            <a href="#." style={{ background: "#6bd6b1" }}></a>
                          </li>
                          {/* <li><a href="#." style={{background:'#82c2dc'}}></a></li>
                                                    <li><a href="#." style={{background:'#8295dc'}}></a></li> */}
                        </div>
                      </ul>
                    </div>

                    <div onClick={addProduct} className="col-6 btnM">
                      ADD TO CART
                    </div>

                    <div className="col-6 like-us">
                      <i className="icon-heart"></i>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="inner-info">
                    <h6>DELIVERY INFORMATION</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum finibus ligula a scelerisque gravida. Nullam
                      laoreet tortor ac maximus alique met, consectetur
                      adipiscing elit.{" "}
                    </p>
                    <h6>SHIPPING & RETURNS</h6>
                    <h6>SHARE THIS PRODUCT</h6>

                    {/* <!-- Social Icons --> */}
                    <ul className="social_icons">
                      <li>
                        <a href="#.">
                          <i className="icon-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="icon-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="icon-social-tumblr"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="icon-social-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="icon-social-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
