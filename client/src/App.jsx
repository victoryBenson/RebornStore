import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { LandingPage } from "./pages/LandingPage";
import {Footer} from "./component/Footer"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MyCart} from "./pages/MyCart"
import { NotFound } from "./component/NotFound";
// import { CheckoutSuccess } from "./pages/CheckoutSuccess";
import { Layout } from "./component/Layout";
import { ConditionRoute } from "./component/ConditionRoute";
// import { RequireAuth } from "./component/RequireAuth";
// import { PayButton } from "./component/PayButton";
// import { AccountPage } from "./pages/AccountPage";
import { Dashboard } from "./pages/Dashboard";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { UserProfile } from "./pages/Profile";
import { HomeDashboard } from "./pages/DashboardOverview";
import { AdminProducts } from "./pages/AdminProducts";
import { Orders } from "./pages/Order";
// import { PayButton } from "./component/PayButton";
// import { useEffect } from "react";
import axios from "axios";
import { PromoDisplay } from "./component/PromoDisplay";
// import ShopLayout from "./component/Shop/ShopLayout";
import Shop from "./component/Shop";
import { RequireAuth } from "./component/RequireAuth";
import { EditProduct } from "./component/EditProduct";
import { CreateProduct } from "./component/CreateProduct";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import { ProductContext } from "./contexts/ProductContext";



function App() {
    axios.defaults.withCredentials = true; 
    // const dispatch = useDispatch()

    // const {currentUser, getUser} = useContext(UserContext)
    const {getProducts} = useContext(ProductContext)
    // console.log(currentUser)
    

    useEffect(() => {
        // getUser()
        getProducts()
    },[])
   

  return (
    <div className="relative">
        <BrowserRouter>
            <ConditionRoute>
                <PromoDisplay/>
                <Header/>
            </ConditionRoute>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element ={<LandingPage/>}/>

                    {/* protected route */}
                    {/* <Route element={<RequireAuth/>}> */}
                        {/* <Route path="payBtn" element ={<PayButton/>}/> */}
                        {/* <Route path="userDetails" element = {<AccountPage/>}/> */}
                    {/* </Route> */}
                </Route>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                {/* <Route path="userDetails" element = {<AccountPage/>}/> */}
                <Route path="mycart" element={<MyCart/>}/>
                {/* <Route path="/checkout-success" element={<CheckoutSuccess/>}/> */}
                {/* <Route path="paymentBtn" element={<PayButton/>}/> */}
                <Route path="*" element={<NotFound/>}/> 
                <Route path="dashboard" element={<Dashboard/>}>
                    {/* protected route */}
                    <Route element={<RequireAuth/>}>
                        <Route path="profile" element={<UserProfile/>}/>
                        <Route path="orders" element={<Orders/>}/>
                        <Route path="home-dashboard" element={<HomeDashboard/>}/>
                        <Route path="admin-products" element={<AdminProducts/>}/>
                        <Route path="editProduct/:id" element={<EditProduct/>}/>
                        <Route path="createProduct" element={<CreateProduct/>}/>
                    </Route>
                </Route>
                <Route path="shop" element={<Shop/>}/>
            </Routes>
            <ConditionRoute>
                <Footer/>
            </ConditionRoute>
        </BrowserRouter>
        <ToastContainer autoClose = {1000} />
    </div>
  )
}

export default App
