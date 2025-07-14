import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const FarmerInfFarmers = () => {
  //const role = useSelector((state: RootState) => state.role.role);
  const navigate = useNavigate();

  const getAllFarmers = () => {
    navigate('/farmer/getAllFarmers');
  }

  const getFarmerByLogin = () => {
    navigate('/farmer/getFarmerByLogin');
  }

  const getFarmersByProduct = () => {
    navigate('/farmer/getFarmersByProduct');
  };

  const getBagsByFarmer = () => {
    navigate('/farmer/getBagsByFarmer');
  }

  return (

    <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>

      <h2>Choose an action</h2>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getAllFarmers}>
            Informations about all farmers</Button>
        </Col>

        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getFarmerByLogin}>
            Informations about the farmer by his login</Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getFarmersByProduct}>
            Informations about the farmers by product</Button>
        </Col>

        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={getBagsByFarmer}>
            Informations about the farmer's bags</Button>
        </Col>
      </Form.Group>

    </Container>

  );
};

export default FarmerInfFarmers;