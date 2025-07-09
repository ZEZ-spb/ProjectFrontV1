import type { RootState } from '../../app/store';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Card } from 'react-bootstrap';

const GetAllProducts = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [products, setProducts] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        setMessage(null);
        setError(null);
        fetch("http://localhost:8080/client/getAllProducts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                if (!Array.isArray(data) || data.length === 0) {
                    setMessage('There are not products in bags');
                }
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);

    return (
        <div>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <h2 style={{ textAlign: 'center' }}>List of products</h2>
            <div className="row" style={{ width: "90%", marginLeft: '5%' }}>
                <Card>
                    <Card.Body>
                        {products.map((product, idx) => (
                            <div
                                // className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
                                key={idx}
                            >
                                <ul>
                                    <li> {product}</li>
                                </ul>
                            </div>
                        ))}
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};



export default GetAllProducts;