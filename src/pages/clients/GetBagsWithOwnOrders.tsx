import type { RootState } from '../../app/store';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Card } from 'react-bootstrap';

const GetBagsWithOwnOrders = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [bags, setBags] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        setMessage(null);
        setError(null);
        fetch("http://localhost:8080/client/getBagsWithOwnOrders", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setBags(data);
                if (!Array.isArray(data) || data.length === 0) {
                    setMessage('You have not orders');
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
            <h2 style={{ textAlign: 'center' }}>List of bags with your orders</h2>
            <div className="row" style={{ width: "90%", marginLeft: '5%' }}>
                
                {bags.map((bag, idx) => (
                    <Card style={{width: "45%", marginLeft: '5%'}}>
                            <Card.Body>
                    <div
                        //className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
                        key={idx}
                    >
                       
                                <ul >
                                    <li><b>Farmer:</b> {bag._login}</li>
                                    <li><b>Name:</b> {bag._name}</li>
                                    <li><b>Product:</b> {bag._product}</li>
                                    <li><b>Description:</b> {bag._description}</li>
                                    <li><b>Date:</b> {bag._date}</li>
                                    <li><b>Customer:</b> {bag._customer}</li>
                                    <li><b>Confirmation:</b> {String(bag._confirmation)}</li>
                                    <li><b>Payment:</b> {String(bag._payment)}</li>
                                    <li><b>Confirmation Payment:</b> {String(bag._confirmPayment)}</li>
                                </ul>
                           
                    </div>
                    </Card.Body>
                        </Card>
                ))}
                
            </div>
        </div>
    );
};



export default GetBagsWithOwnOrders;


