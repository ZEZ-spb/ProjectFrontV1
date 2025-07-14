import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Alert, Card } from 'react-bootstrap';

type Customer = {
    login: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string
}

const GetClientsOrderedBags = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [clients, setClients] = useState<Customer[]>([])
    const baseURL = import.meta.env.VITE_API_URL;

useEffect(() => {
  setMessage(null); // сбрасываем сообщение при каждом запросе
  if (!token ) return;
  //fetch(`http://localhost:8080/farmer/getClientsOrderedBags`, {
  fetch(`${baseURL}/farmer/getClientsOrderedBags`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(async res => {
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to get clients');
      if (!Array.isArray(data) || data.length === 0) {
        setMessage('No clients for your bags');
        setClients([]);
        return;
      }
      const mappedClients: Customer[] = data.map((data1: any) => ({
        login: data1._login,
        firstName: data1._firstName,
        lastName: data1._lastName,
        email: data1._email,
        phone: data1._phone
      }));
      setClients(mappedClients);
    })
    .catch(err => {
      setError(err.message);
    });
}, [token]);

return (
    <div>
    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    {message && <Alert variant="success">{message}</Alert>}
      <h2 style={{ textAlign: 'center' }}>List of clients</h2>
      <div className="row" style={{ width: "90%", marginLeft: '5%' }}>
        {clients.map((client, idx) => (
          <div
            
            key={idx}
          >
            <Card >
              <Card.Body>
                <ul>
                  <li><b>Login:</b> {client.login}</li>
                  <li><b>First Name:</b> {client.firstName}</li>
                  <li><b>Last Name:</b> {client.lastName}</li>
                  <li><b>Email:</b> {client.email}</li>
                  <li><b>Phone:</b> {client.phone}</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
     </div>
  );
};

export default GetClientsOrderedBags;