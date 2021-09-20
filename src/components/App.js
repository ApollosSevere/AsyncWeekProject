import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

import Home from "./Home/Home";
import Header from "./utils/Header/Header";
import ProductDetail from "./productDetail/ProductDetail";
import { GlobalProvider } from "../Context/Context";
import Checkout from "./Checkout/Checkout";
import "../App.css";

import Dropdown from "../testing/src/App";

function App() {
  return (
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   <div className="w-100" style={{ maxWidth: "400px" }}>
    //     <Router>
    //       <AuthProvider>
    //         <Switch>
    //           <PrivateRoute exact path="/" component={Dashboard} />
    //           <PrivateRoute path="/update-profile" component={UpdateProfile} />
    //           <Route path="/signup" component={Signup} />
    //           <Route path="/login" component={Login} />
    //           <Route path="/forgot-password" component={ForgotPassword} />
    //         </Switch>
    //       </AuthProvider>
    //     </Router>
    //   </div>
    // </Container>

    <GlobalProvider>
      <div className="wrapper">
        <Router>
          <Header />

          <div className="stuff">
            <Switch>
              {/* <Route path="/">
                <Home />
              </Route> */}

              {/* <Route exact path="/produtDetail">
                <ProductDetail />
              </Route> */}

              <Route path="/" exact component={Home} />
              <Route path="/productDetail/:id/:obj" component={ProductDetail} />
              <PrivateRoute path="/checkout" component={Checkout} />

              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div
                  className="w-100"
                  style={{ maxWidth: "500px", height: "550px" }}
                >
                  <PrivateRoute path="/dashboard" component={Dashboard} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route path="/dropdown" component={Dropdown} />
                  <Route path="/Signup" component={Signup} />
                  <Route path="/login" component={Login} />
                </div>{" "}
              </Container>
            </Switch>
          </div>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;

//
