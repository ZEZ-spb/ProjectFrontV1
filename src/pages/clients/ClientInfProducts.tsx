import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const ClientInfProducts = () => {
    //const role = useSelector((state: RootState) => state.role.role);
    const navigate = useNavigate();

    const getFarmersByProduct = () => {
    navigate('/farmer/getFarmersByProduct');
    };

    const getBagsByProduct = () => {
    navigate('/farmer/getBagsByProduct');
    }

    const getClientsByProduct = () => {
    navigate('/farmer/getClientsByProduct');
    }

    const getAllProducts = () => {
    navigate('/client/getAllProducts');
    } 
       
    return (
    
        <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>
    
          <h2>Choose an action</h2>
          <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px'}} onClick={getFarmersByProduct}>Informations about the farmers by product</Button>
              </Col>
    
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getBagsByProduct}>Find bags by product</Button>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px'}} onClick={getClientsByProduct}>Informations about customers who ordered the product</Button>
              </Col>
    
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px'}} onClick={getAllProducts}>Get all products</Button>
              </Col>
            </Form.Group>
                      
        </Container>
    
      );
    };

export default ClientInfProducts;