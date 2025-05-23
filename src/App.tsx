import { ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";
import customerTheme from "./theme/customTheme";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";
import Review from "./customer/pages/Review/Review";
import Cart from "./customer/pages/Cart/Cart";
import Checkout from "./customer/pages/Checkout/Checkout";
import Account from "./customer/pages/Account/Account";
import { Route, Routes, useNavigate } from "react-router-dom";
import BecomeSeller from "./customer/pages/Become Seller/BecomeSeller";
import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";
import AdminDashboard from "./admin/pages/Dashboard/AdminDashboard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./State/Store";
import { fetchSellerProfile } from "./State/seller/sellerSlice";
import Auth from "./customer/pages/Auth/Auth";
import { fetchUserProfile } from "./State/AuthSlice";
import PaymentSuccess from "./customer/pages/PaymentSuccess";
import Wishlist from "./customer/Wishlist/Wishlist";

function App() {
     const dispatch = useAppDispatch();
     const { seller, auth } = useAppSelector((store) => store);
     const navigate = useNavigate();

     useEffect(() => {
          dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
     }, []);

     useEffect(() => {
          if (seller.profile) {
               navigate("/seller");
          }
     }, [seller.profile]);

     useEffect(() => {
          dispatch(fetchUserProfile({ jwt: auth.jwt || localStorage.getItem("jwt") || "" }));
     }, [auth.jwt]);

     return (
          <ThemeProvider theme={customerTheme}>
               <div>
                    <Navbar />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/login" element={<Auth />} />
                         <Route path="/products/:category" element={<Product />} />
                         <Route path="/reviews/:productId" element={<Review />} />
                         <Route
                              path="/product-details/:categoryId/:name/:productId"
                              element={<ProductDetails />}
                         />
                         <Route path="/cart" element={<Cart />} />
                         <Route path="/wishlist" element={<Wishlist />} />
                         <Route path="/checkout" element={<Checkout />} />
                         <Route path="/payment-success/:orderId" element={<PaymentSuccess />} />
                         <Route path="/account/*" element={<Account />} />
                         <Route path="/become-seller" element={<BecomeSeller />} />
                         <Route path="/seller/*" element={<SellerDashboard />} />
                         <Route path="/admin/*" element={<AdminDashboard />} />
                    </Routes>
               </div>
          </ThemeProvider>
     );
}

export default App;
