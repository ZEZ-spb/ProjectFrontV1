import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import { setBagName } from '../../store/slices/bagNameSlice';
//import { useNavigate } from 'react-router-dom';

type TokenPayload = {
  login: string;
  role: string;
};

const GetOwnBagByName = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const bagName = useSelector((state: RootState) => state.bagName.bagName);
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bagName: bagName || ''
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [bag, setBag] = useState<any>(null);

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
      const res = await fetch(`http://localhost:8080/farmer/getOwnBagByName/${formData.bagName}`, {
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
      dispatch(setBagName(data._name));
      localStorage.setItem('bagName', data._name);
      setSuccess('Bag found');
      setBag(data);
      //navigate('/farmer/UpdateBag2');
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
        <Button type="submit">Input</Button>
      </Form>

    {/* {error && <Alert variant="danger" className="mt-3">{error}</Alert>} */}
      {bag && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Client Info</Card.Title>
            <ul>
              <li><b>Name:</b> {bag._name}</li>
              <li><b>Product:</b> {bag._product}</li>
              <li><b>Description:</b> {bag._description}</li>
              <li><b>Date:</b> {bag._date}</li>
              {/* <li><b>Phone:</b> {client._phone}</li> */}
              {/* <li><b>Address:</b> {farmer._address}</li>
              <li><b>Postal Code:</b> {farmer._postalCode}</li> */}
              {/* <li><b>Role:</b> {farmer._role}</li> */}
            </ul>
          </Card.Body>
        </Card>
      )}


    </Container>
  );



}

export default GetOwnBagByName;