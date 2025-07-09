import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRole } from '../../store/slices/roleSlice';
import { Button, Container } from 'react-bootstrap';


const RoleSelector = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (role: 'farmer' | 'client') => {
    dispatch(setRole(role));
    navigate('/auth');
  };

  return ( 
    <div>     
      <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
         <h1>Welcome to Daily Farmer</h1>
        <h2 className="mb-4">Choose your role</h2>
        <div className="d-flex gap-3">
          <Button variant="success" size="lg" onClick={() => handleSelect('farmer')}>Farmer</Button>
          <Button variant="primary" size="lg" onClick={() => handleSelect('client')}>Client</Button>
        </div>
      </Container>
    </div>
  );
};

export default RoleSelector;