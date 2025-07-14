import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';

const ConfirmOrder = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [bagName, setBagName] = useState('');
  const [bag, setBag] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const baseURL = import.meta.env.VITE_API_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBagName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBag(null);

    if (!bagName) {
      setError('Bag name is required');
      return;
    }

    try {
      // const res = await fetch(`http://localhost:8080/farmer/confirmOrder/${bagName}`, {
      const res = await fetch(`${baseURL}/farmer/confirmOrder/${bagName}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Bag not found');
      setBag(data);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '600px' }}>
      <h4>Enter bag's name to confirm order</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Col>
            {/* <Form.Label>Login</Form.Label> */}
            <Form.Control
              type="text"
              value={bagName}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Confirm</Button>
      </Form>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {bag && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Bag Info</Card.Title>
            <ul>
              <li><b>Name:</b> {bag._name}</li> 
              <li><b>Farmer:</b> {bag._login}</li>
              <li><b>Product:</b> {bag._product}</li>
              <li><b>Description:</b> {bag._description}</li>
              <li><b>Date:</b> {bag._date}</li>
              <li><b>Customer:</b> {bag._customer}</li>
              <li><b>Confirmation:</b> {String(bag._confirmation)}</li>
              <li><b>Payment:</b> {String(bag._payment)}</li>
              <li><b>Confirmation Payment:</b> {String(bag._confirmPayment)}</li>
            </ul>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default ConfirmOrder;