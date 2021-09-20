import React, { useRef, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/Context";
import { Form, Button, Card, Alert } from "react-bootstrap";

export default function Login() {
  const { login, currentUser } = useContext(GlobalContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(false);
      let user = await login(emailRef.current.value, passwordRef.current.value);
      console.log(user);
      history.push("/");
    } catch (error) {
      setError("Failed to Login", error);
    }
    setLoading(true);
  }

  return (
    <>
      <Card style={{ height: "80%" }}>
        <Card.Body>
          <h1 className="text-center h-30px mb-4">Log In</h1>
          {currentUser && currentUser.email}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-5">
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
