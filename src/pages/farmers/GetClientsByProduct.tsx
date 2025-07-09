import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetClientsByProduct = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [product, setProduct] = useState('');
    const [clients, setClients] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setClients([]);

        if (!product) {
            setError('Product is required');
            return;
        }

        try {
            const res = await fetch(`http://localhost:8080/farmer/getClientsByProduct/${product}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'No farmers found');
            setClients(data);
        } catch (err) {
            setError((err as Error).message);
        }
    };

    return (
        <Container className="mt-4" style={{ maxWidth: '900px' }}>
            <h2>Find Clients by Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Col>
                        <Form.Label>Product</Form.Label>
                        <Form.Control
                            type="text"
                            value={product}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                </Form.Group>
                <Button type="submit" variant="primary">Request</Button>
            </Form>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            {clients.length > 0 && (
                <div className="mt-4">
                    {/* </div><div className="row" style={{ width: "90%", marginLeft: '5%'}}> */}
                    <h4 style={{ textAlign: 'center' }} >Farmers producing "{product}"</h4>
                    <Row>
                        {clients.map((client, idx) => (
                            // <Card key={idx} className="mb-3">
                            <Col md={6} sm={12} key={idx} className="mb-3">
                                <Card>
                                    <Card.Body>
                                        <ul>
                                            <li><b>Login:</b> {client._login}</li>
                                            <li><b>First Name:</b> {client._firstName}</li>
                                            <li><b>Last Name:</b> {client._lastName}</li>
                                            <li><b>Email:</b> {client._email}</li>
                                            <li><b>Phone:</b> {client._phone}</li>
                                            {/* <li><b>Address:</b> {farmer._address}</li>
                                            <li><b>Postal Code:</b> {farmer._postalCode}</li> */}
                                            {/* <li><b>Role:</b> {farmer._role}</li> */}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </Container>



    );
};

export default GetClientsByProduct;