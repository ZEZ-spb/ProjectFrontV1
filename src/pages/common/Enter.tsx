import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Enter = () => {
  const role = useSelector((state: RootState) => state.role.role);
  const navigate = useNavigate();

  if (!role) return <Navigate to="/" />;

  const handleRegister = () => {
    navigate('/auth/register');
  };

  const handleLogin = () => {
    navigate('/auth/login');
  };

  return (
    <div className="container mt-5">
      <h2>Enter for {role}</h2>
      <div className="d-flex gap-3">
        <Button variant="success" size="lg" onClick={() => handleRegister()}>Register</Button>
        <Button variant="primary" size="lg" onClick={() => handleLogin()}>Login</Button>
      </div>
    </div>
  );
};

export default Enter;