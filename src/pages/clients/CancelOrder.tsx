import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Navigate } from 'react-router-dom';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';
import { setBagName } from '../../store/slices/bagNameSlice';

const CancelOrder = () => {
  const role = useSelector((state: RootState) => state.role.role);
  const token = useSelector((state: RootState) => state.auth.token);
  //const bagName = useSelector((state: RootState) => state.bagName.bagName)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    farmer: '',
    bagName: '',
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!role) return <Navigate to="/" />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    const url = 'http://localhost:8080/client/cancelOrder'
      
    try {
      const response = await fetch(url, {
        method: 'PUT',
        // body: {farmer: formData.farmer, bagName: formData.bagName},
        headers: { 'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Unknown error');
      }
      dispatch(setBagName(formData.bagName));
      localStorage.setItem('bagName', formData.bagName);
      setMessage('Cancelling bag successful!')

    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (

    <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>

      <h2>Cancelling order</h2>
      <Form onSubmit={handleSubmit}>

        <Form.Group as={Row} className="mb-3">
          <Col md={6}>
            <Form.Label>Farmer</Form.Label>
            <Form.Control
              name="farmer"
              value={formData.farmer}
              onChange={handleChange}
              required
            />
          </Col>

          <Col md={6}>
            <Form.Label>Bag name</Form.Label>
            <Form.Control
              name="bagName"
              value={formData.bagName}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}

        <Button type="submit" variant="primary">Cancel</Button>

      </Form>

    </Container>

  );
};

export default CancelOrder;