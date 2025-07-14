import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';

const GetFarmerByLogin = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [login, setLogin] = useState('');
  const [farmer, setFarmer] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const baseURL = import.meta.env.VITE_API_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setFarmer(null);

    if (!login) {
      setError('Login is required');
      return;
    }

    try {
      //const res = await fetch(`http://localhost:8080/farmer/getFarmerByLogin/${login}`, {
      const res = await fetch(`${baseURL}/farmer/getFarmerByLogin/${login}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Farmer not found');
      setFarmer(data);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '600px' }}>
      <h2>Find Farmer by Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Col>
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              value={login}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Request</Button>
      </Form>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {farmer && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Farmer Info</Card.Title>
            <ul>
              <li><b>Login:</b> {farmer._login}</li>
              <li><b>First Name:</b> {farmer._firstName}</li>
              <li><b>Last Name:</b> {farmer._lastName}</li>
              <li><b>Email:</b> {farmer._email}</li>
              <li><b>Phone:</b> {farmer._phone}</li>
              <li><b>Address:</b> {farmer._address}</li>
              <li><b>Postal Code:</b> {farmer._postalCode}</li>
              {/* <li><b>Role:</b> {farmer._role}</li> */}
            </ul>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default GetFarmerByLogin;