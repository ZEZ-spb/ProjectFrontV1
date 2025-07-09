import { Button, Col, Container, Form, Row } from "react-bootstrap";
//import { useSelector } from "react-redux";
//import type { RootState } from "../app/store";
import { useNavigate } from 'react-router-dom';

const ClientDashboard = () => {
    //const role = useSelector((state: RootState) => state.role.role);
    const navigate = useNavigate();

    const editAuth = () => {
    navigate('/client/editClient');
    };
    
    const editOrders = () => {
    navigate('/client/editOrders');
    }

    const infFarmers = () => {
    navigate('/client/infFarmers');   
    }

    const infClients = () => {
    navigate('/client/infClients');
    }

    const infBags = () => {
    navigate('/client/infBags');
    }

    const infProducts = () => {
    navigate('/client/infProducts');
    }

    const infOrders = () => {
    navigate('/client/infOrders');
    }

    const buyClient = () => {
    navigate('/client/buyClient');
    }
    
    return (
    
        <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>
    
          <h2>Choose an action</h2>
             
            <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px'}} onClick={editAuth}>Edit your account</Button>
              </Col>
    
              <Col md={6}>    
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={() => editOrders()}>Edit your orders</Button>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px'}} onClick={() => infFarmers()}>Information about farmers</Button>
              </Col>
    
              <Col md={6}>
                <Button variant="success" size="lg" style={{width: '100%', height: '80px'}} onClick={() => infClients()}>Information about clients</Button>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{width: '100%', height: '80px'}} onClick={() => infBags()}>Information about bags</Button>
              </Col>
    
              <Col md={6}>
                <Button variant="success" size="lg" style={{width: '100%', height: '80px'}} onClick={() => infProducts()}>Information about products</Button>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{width: '100%', height: '80px'}} onClick={() => infOrders()}>Information about your orders</Button>
              </Col>
    
              <Col md={6}>
                <Button variant="success" size="lg" style={{width: '100%', height: '80px'}} onClick={() => buyClient()}>Buy your order</Button>
              </Col>
            </Form.Group>
                      
        </Container>
    
      );
    };

export default ClientDashboard;