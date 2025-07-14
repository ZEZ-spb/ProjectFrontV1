import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';

type TokenPayload = {
  login: string;
  role: string;
};
const UpdateBag2 = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const bagName = useSelector((state: RootState) => state.bagName.bagName);
  const [formData, setFormData] = useState({
    product: '',
    description: '',
    date: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const baseURL = import.meta.env.VITE_API_URL; // Assuming you have set this in your .env file

  // Получаем login из токена
  const loginFromToken = token ? (jwtDecode(token) as TokenPayload).login : null;

  // Получаем данные текущего фермера
  useEffect(() => {
    if (!token || !loginFromToken) return;

    //fetch(`http://localhost:8080/farmer/getOwnBagByName/${bagName}`, {
      fetch(`${baseURL}/farmer/getOwnBagByName/${bagName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async res => {
        const data = await res.json();
        console.log('data',data)
        if (!res.ok) throw new Error(data.message || 'Failed to fetch bag');
        setFormData({
            product: data._product || '',
            description: data._description || '',
            date: data._date || '',  
        });
        console.log('formData',formData)
})
      .catch(err => {
        setError(err.message);
      });
  }, [token, loginFromToken]);


useEffect(() => {
  // formData обновился
  console.log('formData changed:', formData);
}, [formData]);

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
    console.log("Token:", token);
    console.log("Login from token:", loginFromToken);
    console.log('!!!')

    try {
      //const res = await fetch(`http://localhost:8080/farmer/updateBag/${bagName}/`, {
        const res = await fetch(`${baseURL}/farmer/updateBag/${bagName}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to update bag');

      setSuccess('Bag updated successfully!');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '800px' }}>
      <h2>Update Bag</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        {['product', 'description', 'date'].map(field => (
          <Form.Group key={field} className="mb-3">
            <Form.Label>{field}</Form.Label>
            <Form.Control
              type="text"
              name={field}
              //value={(formData as any)[field]}
              value={formData[field as keyof typeof formData] || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
        ))}
        <Button type="submit">Update</Button>
      </Form>
    </Container>
  );
};

export default UpdateBag2;