import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Alert, Container, Button } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';

type TokenPayload = {
  login: string;
  role: string;
};

const RemoveFarmer = () => {    
  const token = useSelector((state: RootState) => state.auth.token);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const baseURL = import.meta.env.VITE_API_URL; // Assuming you have set this in your .env file

  const loginFromToken = token ? (jwtDecode(token) as TokenPayload).login : null;

  const handleRemove = async () => {
    setError(null);
    setSuccess(null);
    try {
      //const res = await fetch(`http://localhost:8080/farmer/remove`, {
      const res = await fetch(`${baseURL}/farmer/remove`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to remove farmer');

      setSuccess(`Farmer ${loginFromToken} removed successfully!`);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '800px' }}>
      <h2>Remove Farmer Info</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Button onClick={handleRemove} disabled={!token || !loginFromToken}>
        Remove Farmer
      </Button>
    </Container>
  );
};

export default RemoveFarmer;