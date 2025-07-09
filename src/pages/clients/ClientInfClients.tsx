import { Button, Col, Container, Form, Row } from "react-bootstrap";
//import { useSelector } from "react-redux";
//import type { RootState } from "../app/store";
import { useNavigate } from 'react-router-dom';

const ClientInfClients = () => {
    //const role = useSelector((state: RootState) => state.role.role);
    const navigate = useNavigate();

    //Добавить информацию клиентах, заказавших свои bags

    const getClientsByProduct = () => {
        navigate('/farmer/getClientsByProduct');
    };

    const getClientByLogin = () => {
         navigate('/client/getClientByLogin');
     }
       
    return (
    
        <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>
    
          <h2>Choose an action</h2>

         <Form.Group as={Row} className="mb-3">
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px'}} onClick={getClientsByProduct}>
                  Informations about customers who ordered the product</Button>
                {/* /> */}
              </Col>
    
              <Col md={6}>
                <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getClientByLogin}>
                  Informations about customer by login</Button>
              </Col>
            </Form.Group> 
                      
        </Container>
    
      );
    };

export default ClientInfClients;