import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Form2() {
  const [input, setInput] = useState({ mail: "", pwd: "", date: "" });
  const smena = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mail = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [mail]: value }));
  };

  function validate(mail: string): boolean {
    if (mail.includes("@") && mail.includes(".")) {
      return true;
    }

    return false;
  }

  const send = (event: React.FormEvent<HTMLFormElement>) => {
    if (!validate(input.mail)) {
      alert("Chybne zadanie");
    } else {
      console.log(input);
      alert(input.mail);
    }
  };

  return (
    <Container>
     <Row>
       <Col md={3}> 
    <Form onSubmit={send}  >
     <Form.Group className="mb-3">
      <Form.Label>Email</Form.Label>

      <Form.Control
        name="mail"
        type="email"
        value={input.mail || ""}
        onChange={smena}
        placeholder="email"
      />
      <Form.Text className="text-muted">Enter valid email</Form.Text>
    </Form.Group>
      
    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>

      <Form.Control
        name="pwd"
        type="password"
        value={input.pwd || ""}
        onChange={smena}
        placeholder="password"
      />
      <Form.Text className="text-muted">Enter valid password</Form.Text>
     </Form.Group> 
      <Button variant="primary" type="submit" >Submit </Button>
    
    </Form>
    </Col>
    </Row>
    </Container>
  );
}

export default Form2;
