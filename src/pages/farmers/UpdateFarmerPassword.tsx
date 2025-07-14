import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const UpdateFarmerPassword = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [formData, setFormData] = useState({
    newPassword: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const baseURL = import.meta.env.VITE_API_URL; // Assuming you have set this in your .env file

  // Получаем login из токена
  //const loginFromToken = token ? (jwtDecode(token) as TokenPayload).login : null;

  // Обработка изменений формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Отправка обновлений на сервер
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
        console.log('formData:', formData);
      //const res = await fetch(`http://localhost:8080/farmer/updatePassword`, {
      const res = await fetch(`${baseURL}/farmer/updatePassword`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
       
        body: JSON.stringify({ newPassword: formData.newPassword }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to update password');

      setSuccess('Password updated successfully!');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '800px' }}>
      <h2>Update Password Info</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
            />
          </Form.Group>
        {/* ))} */}
        <Button type="submit">Update</Button>
      </Form>
    </Container>
  );
};

export default UpdateFarmerPassword;