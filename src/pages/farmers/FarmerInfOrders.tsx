import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const FarmerInfOrders = () => {
  //const role = useSelector((state: RootState) => state.role.role);
  const navigate = useNavigate();

  const getOwnBagsWithOrder = () => {
    navigate('/farmer/getOwnBagsWithOrder');
  }

  return (

    <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>

      <h2>Choose an action</h2>

      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getOwnBagsWithOrder}>
            Look at your reserved bags</Button>
        </Col>


      </Form.Group>

    </Container>

  );
};

export default FarmerInfOrders;