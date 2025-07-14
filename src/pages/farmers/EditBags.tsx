import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const EditBags = () => {
  //const role = useSelector((state: RootState) => state.role.role);
  const navigate = useNavigate();

  const createBag = () => {
    navigate('/farmer/createBag');
  }

  const updateBag1 = () => {
    navigate('/farmer/updateBag1');
  }

  const removeBag = () => {
    navigate('/farmer/removeBag');
  };

  return (

    <Container fluid className="mt-5" style={{ maxWidth: '100%' }}>

      <h2>Choose an action</h2>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={createBag}>
            Create bag</Button>
        </Col>

        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={updateBag1}>
            Update one of your bags</Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Button variant="success" size="lg" style={{ width: '100%', height: '80px' }} onClick={removeBag}>
            Remove one of your bag</Button>
        </Col>
      </Form.Group>

    </Container>

  );
};

export default EditBags;