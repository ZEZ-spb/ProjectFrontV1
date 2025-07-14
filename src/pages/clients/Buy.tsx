import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Buy = () => {
    //const role = useSelector((state: RootState) => state.role.role);
    const navigate = useNavigate();

    const payment = () => {
    navigate('/client/payment');
    };

    const receiving = () => {
    navigate('/client/receiving');
    }
       
    return (
    
        <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>
    
          <h2>Choose an action</h2>
          <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px'}} onClick={payment}>Payment confirmation</Button>
              </Col>
    
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={receiving}>Receiving confirmation</Button>
              </Col>
            </Form.Group>
                      
        </Container>
    
      );
    };

export default Buy;