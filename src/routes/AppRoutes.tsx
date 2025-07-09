import { Routes, Route } from 'react-router-dom';
import RoleSelector from '../pages/common/RoleSelector';
import Login from '../pages/common/Login';
import Register from '../pages/common/Register';
import Enter from '../pages/common/Enter';
import FarmerDashboard from '../pages/farmers/FarmerDashboard';
import ClientDashboard from '../pages/clients/ClientDashboard';
import EditFarmer from '../pages/farmers/EditFarmer';
import EditBags from '../pages/farmers/EditBags';
import FarmerInfFarmers from '../pages/farmers/FarmerInfFarmers';
import FarmerInfClients from '../pages/farmers/FarmerInfClients';
import FarmerInfBags from '../pages/farmers/FarmerInfBags';
import FarmerInfProducts from '../pages/farmers/FarmerInfProducts';
import FarmerInfOrders from '../pages/farmers/FarmerInfOrders';
import Sale from '../pages/farmers/Sale';
import EditClient from '../pages/clients/EditClients';
import EditOrders from '../pages/clients/EditOrders';
import ClientInfFarmers from '../pages/clients/ClientInfFarmers';
import ClientInfClients from '../pages/clients/ClientInfClients';
import ClientInfBags from '../pages/clients/ClientInfBags';
import ClientInfProducts from '../pages/clients/ClientInfProducts';
import ClientInfOrders from '../pages/clients/ClientInfOrders';
import Buy from '../pages/clients/Buy';
import UpdateFarmer from '../pages/farmers/UpdateFarmer';
import RemoveFarmer from '../pages/farmers/RemoveFarmer';
import CreateBag from '../pages/farmers/CreateBag';
import UpdateBag1 from '../pages/farmers/UpdateBag1';
import UpdateBag2 from '../pages/farmers/UpdateBag2';
import RemoveBag from '../pages/farmers/RemoveBag';
import AllFarmers from '../pages/farmers/AllFarmers';
import GetFarmerByLogin from '../pages/farmers/GetFarmerByLogin';
import GetFarmersByProduct from '../pages/farmers/GetFarmersByProduct';
import GetBagsByFarmer from '../pages/farmers/GetBagsByFarmer';
import GetClientsByProduct from '../pages/farmers/GetClientsByProduct';
import GetClientsOrderedBags from '../pages/farmers/GetClientsOrderedBags';
import GetBagsByProduct from '../pages/farmers/GetBagsByProduct';
import GetOwnBags from '../pages/farmers/GetOwnBags';
import GetOwnBagsWithOrder from '../pages/farmers/GetOwnBagsWithOrder';
import GetAllProducts from '../pages/clients/GetAllProducts';
import ConfirmOrder from '../pages/farmers/ConfirmOrder';
import ConfirmPayment from '../pages/farmers/ConfirmPayment';
import UpdateFarmerPassword from '../pages/farmers/UpdateFarmerPassword';
import UpdateClientPassword from '../pages/clients/UpdateClientPassword';
import UpdateClient from '../pages/clients/UpdateClient';
import RemoveClient from '../pages/clients/RemoveClient';
import CreateOrder from '../pages/clients/CreateOrder';
import GetBagsWithOwnOrders from '../pages/clients/GetBagsWithOwnOrders';
import CancelOrder from '../pages/clients/CancelOrder';
import Payment from '../pages/clients/Payment';
import Receiving from '../pages/clients/Receiving';
import GetClientByLogin from '../pages/clients/GetClientByLogin';
import GetOwnBagByName from '../pages/farmers/GetOwnBagByName';

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<RoleSelector/>} />
      <Route path="/auth" element={<Enter />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/dashboardfarmer" element={<FarmerDashboard />} />
      <Route path="/dashboardclient" element={<ClientDashboard />} />
      <Route path="/farmer/editFarmer" element={<EditFarmer />} />
      <Route path="/farmer/editBags" element={<EditBags />} />
      <Route path="/farmer/infFarmers" element={<FarmerInfFarmers />} />
      <Route path="/farmer/infClients" element={<FarmerInfClients />} />
      <Route path="/farmer/infBags" element={<FarmerInfBags />} />
      <Route path="/farmer/infProducts" element={<FarmerInfProducts />} />
      <Route path="/farmer/infOrders" element={<FarmerInfOrders />} />
      <Route path="/farmer/saleFarmer" element={<Sale />} />
      <Route path="/client/editClient" element={<EditClient />} />
      <Route path="/client/editOrders" element={<EditOrders />} />
      <Route path="/client/infFarmers" element={<ClientInfFarmers />} />
      <Route path="/client/infClients" element={<ClientInfClients />} />
      <Route path="/client/infBags" element={<ClientInfBags />} />
      <Route path="/client/infProducts" element={<ClientInfProducts />} />
      <Route path="/client/infOrders" element={<ClientInfOrders />} />
      <Route path="/client/buyClient" element={<Buy />} />
      <Route path="/farmer/updateFarmer" element={<UpdateFarmer />} />
      <Route path="/farmer/removeFarmer" element={<RemoveFarmer />} />
      <Route path="/farmer/updatePassword" element={<UpdateFarmerPassword />} />
      <Route path="/farmer/createBag" element={<CreateBag />} />
      <Route path="/farmer/updateBag1" element={<UpdateBag1 />} />
      <Route path="/farmer/updateBag2" element={<UpdateBag2 />} />
      <Route path="/farmer/removeBag" element={<RemoveBag />} />
      <Route path="/farmer/getAllFarmers" element={<AllFarmers />} />
      <Route path="/farmer/getFarmerByLogin" element={<GetFarmerByLogin />} />
      <Route path="/farmer/getFarmersByProduct" element={<GetFarmersByProduct />} />
      <Route path="/farmer/getBagsByFarmer" element={<GetBagsByFarmer />} />
      <Route path="/farmer/getClientsByProduct" element={<GetClientsByProduct />} />
      <Route path="/farmer/getClientsOrderedBags" element={<GetClientsOrderedBags />} />
      <Route path="/farmer/getBagsByProduct" element={<GetBagsByProduct />} />
      <Route path="/farmer/getOwnBags" element={<GetOwnBags />} />
      <Route path="/farmer/getOwnBagsWithOrder" element={<GetOwnBagsWithOrder />} />
      <Route path="/client/getAllProducts" element={<GetAllProducts />} />
      <Route path="/farmer/confirmOrder" element={<ConfirmOrder />} />
      <Route path="/farmer/confirmPayment" element={<ConfirmPayment />} />
      <Route path="/client/updatePassword" element={<UpdateClientPassword />} />
      <Route path="/client/updateClient" element={<UpdateClient />} />
      <Route path="/client/removeClient" element={<RemoveClient />} />
      <Route path="/client/createOrder" element={<CreateOrder />} />
      <Route path="/client/getBagsWithOwnOrders" element={<GetBagsWithOwnOrders />} />
      <Route path="/client/cancelOrder" element={<CancelOrder />} />
      <Route path="/client/payment" element={<Payment />} />
      <Route path="/client/receiving" element={<Receiving />} />
      <Route path="/client/getClientByLogin" element={<GetClientByLogin />} />
      <Route path="/farmer/getOwnBagByName" element={<GetOwnBagByName />} />
    </Routes>
  );

};

export default AppRoutes;