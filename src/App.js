import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Tools from './Pages/Home/Tools/Tools/Tools';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import { ToastContainer } from 'react-toastify';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';

function App() {
  return (
    <div className="App mx-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index='/dashboard/myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/addReview' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='/dashboard/addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='/dashboard/manageOrders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='/dashboard/makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='/dashboard/manageProducts' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
      </Routes >
      <ToastContainer />
    </div >
  );
}

export default App;
