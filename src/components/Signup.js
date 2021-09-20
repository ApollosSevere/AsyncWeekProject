import React, { useRef, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/Context";
import { Form, Button, Card, Alert } from "react-bootstrap";

export default function Signup() {
  const { signup, currentUser } = useContext(GlobalContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(false);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError("Failed to create an account", error);
    }
    setLoading(true);
  }

  return (
    <>
      <Card style={{ height: "100%" }}>
        <Card.Body>
          <h1 className="text-center h-30px mb-4">Sign Up</h1>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
