import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const EditFarmer = () => {
  //const role = useSelector((state: RootState) => state.role.role);
  const navigate = useNavigate();

  const updateFarmer = () => {
    navigate('/farmer/updateFarmer');
  }

  const removeFarmer = () => {
    navigate('/farmer/removeFarmer');
  }

  const updatePassword = () => {
    navigate('/farmer/updatePassword');
  };

  return (

    <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>

      <h2>Choose an action</h2>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={updateFarmer}>
            Edit your details</Button>
        </Col>

        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={removeFarmer}>
            Close your account</Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={updatePassword}>
            Update your password</Button>
        </Col>
      </Form.Group>

    </Container>

  );
};

export default EditFarmer;