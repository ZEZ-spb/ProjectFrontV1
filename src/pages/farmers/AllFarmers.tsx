import type { RootState } from '../../app/store';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

type FarmerDto = {
  _login: string;
  _firstName: string;
  _lastName: string;
  _email: string;
  _phone: string;
  _address: string;
  _postalCode: string;
  _role: string;
};

//const AllFarmers: React.FC = () => {
const AllFarmers = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [farmers, setFarmers] = useState<FarmerDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/farmer/getAllFarmers", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setFarmers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>List of farmers</h2>
      <div className="row" style={{ width: "90%", marginLeft: '5%' }}>
        {farmers.map((farmer, idx) => (
          <div
            className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
            key={idx}
          >

            <Card>
              <Card.Body>
                <ul>
                  <li><b>Login:</b> {farmer._login}</li>
                  <li><b>First Name:</b> {farmer._firstName}</li>
                  <li><b>Last Name:</b> {farmer._lastName}</li>
                  <li><b>Email:</b> {farmer._email}</li>
                  <li><b>Phone:</b> {farmer._phone}</li>
                  <li><b>Address:</b> {farmer._address}</li>
                  <li><b>Postal Code:</b> {farmer._postalCode}</li>
                  {/* <li><b>Role:</b> {farmer._role}</li> */}
                </ul>
              </Card.Body>
            </Card>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFarmers;