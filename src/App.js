import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequiredAdmin from './Pages/Authentication/RequiredAdmin/RequiredAdmin';
import Purchase from './Pages/Purchase/Purchase';
import Pending from './Pages/Purchase/Pending';
import AllProduct from './Pages/AllProducts/AllProduct';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={
          <RequiredAuth>
            <Dashboard></Dashboard>
          </RequiredAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/addreview' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/addproduct' element={<RequiredAdmin><AddProduct></AddProduct></RequiredAdmin>}></Route>
          <Route path='/dashboard/manageproducts' element={<RequiredAdmin><ManageProduct></ManageProduct></RequiredAdmin>}></Route>
          <Route path='/dashboard/manageorders' element={<RequiredAdmin><ManageOrders></ManageOrders></RequiredAdmin>}></Route>
          <Route path='/dashboard/makeadmin' element={<RequiredAdmin><MakeAdmin></MakeAdmin></RequiredAdmin>}></Route>
        </Route>
        <Route path='/purchase/:id' element={<RequiredAuth><Purchase></Purchase></RequiredAuth>}></Route>
        <Route path='/pending/:id' element={<RequiredAuth><Pending></Pending></RequiredAuth>}></Route>
        <Route path='/allproduct' element={<AllProduct></AllProduct>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
