import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetBagsByProduct = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [product, setProduct] = useState('');
    const [bags, setBags] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const baseURL = import.meta.env.VITE_API_URL;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setBags([]);

        if (!product) {
            setError('Product is required');
            return;
        }

        try {
            //const res = await fetch(`http://localhost:8080/farmer/getBagsByProduct/${product}`, {
            const res = await fetch(`${baseURL}/farmer/getBagsByProduct/${product}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'No product found');
            setBags(data);
        } catch (err) {
            setError((err as Error).message);
        }
    };

    return (
        <Container className="mt-4" style={{ maxWidth: '900px' }}>
            <h2>Find Bags by Product</h2>
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


            {bags.length > 0 && (
                <div className="mt-4">
                    
                    <h4 style={{ textAlign: 'center' }} >Bags with product {product}</h4>
                    <Row>
                        {bags.map((bag, idx) => (
                            // <Card key={idx} className="mb-3">
                            <Col md={6} sm={12} key={idx} className="mb-3">
                                <Card>
                                    <Card.Body>
                                        <ul>
                                            <li><b>Name:</b> {bag._name}</li>
                                            <li><b>Farmer:</b> {bag._login}</li>
                                            <li><b>Product:</b> {bag._product}</li>
                                            <li><b>Description:</b> {bag._description}</li>
                                            <li><b>Date of realization:</b> {bag._date}</li>
                                            <li><b>Customer:</b> {bag._customer}</li>
                                            <li><b>Confirmation:</b> {String(bag._confirmation)}</li>
                                            <li><b>Payment:</b> {String(bag._payment)}</li>
                                            <li><b>Confirmation Payment:</b> {String(bag._confirmPayment)}</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}


            </Container>
    )
}
export default GetBagsByProduct;