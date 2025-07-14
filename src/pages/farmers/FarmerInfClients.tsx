import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const FarmerInfClients = () => {
  //const role = useSelector((state: RootState) => state.role.role);
  const navigate = useNavigate();

  //Добавить информацию клиентах, заказавших свои bags

  const getClientsByProduct = () => {
    navigate('/farmer/getClientsByProduct');
  };

  const getClientsOrderedBags = () => {
    navigate('/farmer/getClientsOrderedBags');
  }

  const getClientByLogin = () => {
         navigate('/client/getClientByLogin');
     }

  return (

    <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>

      <h2>Choose an action</h2>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getClientsByProduct}>
            Informations about customers who ordered the product</Button>
          {/* /> */}
        </Col>

        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getClientsOrderedBags}>
            Informations about customers who ordered my bags</Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getClientByLogin}>
            Informations about customers by login</Button>
          {/* /> */}
        </Col>

      </Form.Group>

    </Container>

  );
};

export default FarmerInfClients;