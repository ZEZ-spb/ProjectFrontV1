import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Alert, Card } from 'react-bootstrap';

type Bag = {
    name: string;
    product: string;
    description: string;
    date: string;
    customer: string;
    confirmation: boolean;
    payment: boolean;
    confirmPayment: boolean
}

const GetOwnBags = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [bags, setBags] = useState<Bag[]>([])
    const baseURL = import.meta.env.VITE_API_URL;

useEffect(() => {
  setMessage(null); // сбрасываем сообщение при каждом запросе
  if (!token ) return;
  //fetch(`http://localhost:8080/farmer/getOwnBags`, {
  fetch(`${baseURL}/farmer/getOwnBags`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(async res => {
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to get bags');
      if (!Array.isArray(data) || data.length === 0) {
        setMessage('You have not bags');
        setBags([]);
        return;
      }
      const mappedBags: Bag[] = data.map((data1: any) => ({
        name: data1._name,
        product: data1._product,
        description: data1._description,
        date: data1._date,
        customer: data1._customer,
        confirmation: data1._confirmation,
        payment: data1._payment,
        confirmPayment: data1._confirmPayment,
      }));
      setBags(mappedBags);
    })
    .catch(err => {
      setError(err.message);
    });
}, [token]);

return (
    <div>
    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    {message && <Alert variant="success">{message}</Alert>}
      <h2 style={{ textAlign: 'center' }}>List of your  bags</h2>
      <div className="row" style={{ width: "90%", marginLeft: '5%' }}>
        {bags.map((bag, idx) => (
          <div
            className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
            key={idx}
          >
            <Card>
              <Card.Body>
                <ul>
                  <li><b>Name:</b> {bag.name}</li>
                  <li><b>Product:</b> {bag.product}</li>
                  <li><b>Description:</b> {bag.description}</li>
                  <li><b>Date:</b> {bag.date}</li>
                  <li><b>Customer:</b> {bag.customer}</li>
                  <li><b>Confirmation:</b> {String(bag.confirmation)}</li>
                  <li><b>Payment:</b> {String(bag.payment)}</li>
                  <li><b>Confirmation Payment:</b> {String(bag.confirmPayment)}</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetOwnBags;