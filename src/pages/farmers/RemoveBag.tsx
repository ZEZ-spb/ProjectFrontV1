import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import { setBagName } from '../../store/slices/bagNameSlice';

type TokenPayload = {
  login: string;
  role: string;
};

const RemoveBag = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const bagName = useSelector((state: RootState) => state.bagName.bagName);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    bagName: bagName || ''
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const baseURL = import.meta.env.VITE_API_URL;

  const loginFromToken = token ? (jwtDecode(token) as TokenPayload).login : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!token || !loginFromToken || !formData.bagName) {
      setError('All fields are required');
      return;
    }

    try {
      //const res = await fetch(`http://localhost:8080/farmer/removeBag/${formData.bagName}`, {
      const res = await fetch(`${baseURL}/farmer/removeBag/${formData.bagName}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log('data:', data);
      if (!res.ok) throw new Error(data.message || 'Failed to fetch bag');
      setFormData({
        bagName: data._name || '',
      });

      dispatch(setBagName(''));
      localStorage.setItem('bagName', '');
      setSuccess('Bag deleted!');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '800px' }}>
      <h2>Input bag name</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>bagName</Form.Label>
          <Form.Control
            type="text"
            name="bagName"
            value={formData.bagName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit">Remove</Button>
      </Form>
    </Container>
  );
};

export default RemoveBag;