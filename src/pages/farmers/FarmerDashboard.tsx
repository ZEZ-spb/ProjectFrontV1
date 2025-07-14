import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const FarmerDashboard = () => {
  //const role = useSelector((state: RootState) => state.role.role);
  const navigate = useNavigate();

  const editAuth = () => {
    navigate('/farmer/editFarmer');
  };

  const editBags = () => {
    navigate('/farmer/editBags');
  }

  const infFarmers = () => {
    navigate('/farmer/infFarmers');
  }

  const infClients = () => {
    navigate('/farmer/infClients');
  }

  const infBags = () => {
    navigate('/farmer/infBags');
  }

  const infProducts = () => {
    navigate('/farmer/infProducts');
  }

  const infOrders = () => {
    navigate('/farmer/infOrders');
  }

  const saleFarmer = () => {
    navigate('/farmer/saleFarmer');
  }

  return (

    <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>

      <h2>Choose an action</h2>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={editAuth}>
            Edit your account</Button>
        </Col>

        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={editBags}>
            Edit your bags</Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={infFarmers}>
            Information about farmers</Button>
        </Col>

        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={infClients}>
            Information about clients</Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={infBags}>
            Information about bags</Button>
        </Col>

        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={infProducts}>
            Information about products</Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={infOrders}>
            Information about orders</Button>
        </Col>

        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={saleFarmer}>
            Sale your bags</Button>
        </Col>
      </Form.Group>

    </Container>

  );
};

export default FarmerDashboard;