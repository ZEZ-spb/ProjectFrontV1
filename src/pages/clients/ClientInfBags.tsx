import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const ClientInfBags = () => {
    //const role = useSelector((state: RootState) => state.role.role);
    const navigate = useNavigate();

    const getBagsByProduct = () => {
    navigate('/farmer/getBagsByProduct');
    }

    const getBagsByFarmer = () => {
    navigate('/farmer/getBagsByFarmer');   
    }
      
    return (
    
        <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>
    
          <h2>Choose an action</h2>
             
            <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px'}} onClick={getBagsByProduct}>
                  Find bags by product</Button>
              </Col>
    
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getBagsByFarmer}>
                  Find the farmer's bags</Button>
              </Col>
            </Form.Group>
                      
        </Container>
    
      );
    };

export default ClientInfBags;