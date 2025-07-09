import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Navigate } from 'react-router-dom';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';
import { setBagName } from '../../store/slices/bagNameSlice';

const CreateBag = () => {
  const role = useSelector((state: RootState) => state.role.role);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    description: '',
    date: '',
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

    const url = 'http://localhost:8080/farmer/createBag'
      
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Unknown error');
      }
      dispatch(setBagName(formData.name));
      localStorage.setItem('bagName', formData.name);
      setMessage('Creation bag successful!')

    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (

    <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>

      <h2>Creation bag</h2>
      <Form onSubmit={handleSubmit}>

        <Form.Group as={Row} className="mb-3">
          <Col md={6}>
            <Form.Label>Name bag</Form.Label>
            <Form.Control
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Col>

          <Col md={6}>
            <Form.Label>Product</Form.Label>
            <Form.Control
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col md={6}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={formData.description}
              onChange={handleChange}
              required 
              />
          </Col>

          <Col md={6}>
            <Form.Label>Date of sale</Form.Label>
            <Form.Control
              name="date"
              value={formData.date}
              onChange={handleChange}
              required 
              />
          </Col>
        </Form.Group>

        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}

        <Button type="submit" variant="primary">Create</Button>

      </Form>

    </Container>

  );
};

export default CreateBag;