import { Button, Col, Container, Form, Row } from "react-bootstrap";
//import { useSelector } from "react-redux";
//import type { RootState } from "../app/store";
import { useNavigate } from 'react-router-dom';

const EditClient = () => {
    //const role = useSelector((state: RootState) => state.role.role);
    const navigate = useNavigate();
    
    const updateClient = () => {
    navigate('/client/updateClient');
    }

    const removeClient = () => {
    navigate('/client/removeClient');   
    }

    const updatePassword = () => {
    navigate('/client/updatePassword');
    };
       
    return (
    
        <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>
    
          <h2>Choose an action</h2>
             
            <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px'}} onClick={updateClient}>Edit your details</Button>
              </Col>
    
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={removeClient}>Close your account</Button>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px'}} onClick={updatePassword}>Update your password</Button>
              </Col>
            </Form.Group>
                      
        </Container>
    
      );
    };

export default EditClient;