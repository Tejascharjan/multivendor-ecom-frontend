import React, { use, useEffect, useState } from "react";
import CartItem from "./CartItemCard";
import { Close, LocalOffer } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { Button, IconButton, TextField } from "@mui/material";
import PricingCart from "./PricingCart";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserCart } from "../../../State/customer/cartSlice";

const Cart = () => {
     const [couponCode, setCouponCode] = useState("");
     const navigate = useNavigate();
     const handleChange = (e: any) => {
          setCouponCode(e.target.value);
     };

     const dispatch = useAppDispatch();
     const { cart } = useAppSelector((store) => store);

     useEffect(() => {
          dispatch(fetchUserCart(localStorage.getItem("jwt") || ""));
     }, []);

     return (
          <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="cartItemSection lg:col-span-2 space-y-3">
                         {cart.cart?.cartItems.map((item) => (
                              <CartItem item={item} />
                         ))}
                    </div>
                    <div className="col-span-1 text-sm space-y-3">
                         <div className="border border-gray-200 rounded-md px-5 py-3 space-y-5">
                              <div className="flex gap-3 text-sm items-center">
                                   <div className="flex gap-3 text-sm items-center">
                                        <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
                                   </div>
                                   <span>Apply Coupons</span>
                              </div>

                              {true ? (
                                   <div className="flex justify-between items-center">
                                        <TextField
                                             variant="outlined"
                                             placeholder="coupon code"
                                             size="small"
                                        />
                                        <Button size="small">Apply</Button>
                                   </div>
                              ) : (
                                   <div className="flex">
                                        <div className="p-1 pl-5 pr-3 border border-gray-200 rounded-md flex gap-2 items-center">
                                             <span className="">Applied</span>
                                             <IconButton size="small">
                                                  <Close className="text-red-600" />
                                             </IconButton>
                                        </div>
                                   </div>
                              )}
                         </div>

                         <div className="border border-gray-200 rounded-md">
                              <PricingCart />
                              <div className="p-5">
                                   <Button
                                        onClick={() => navigate("/checkout")}
                                        fullWidth
                                        variant="contained"
                                        sx={{ py: "11px" }}
                                   >
                                        Buy Now
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Cart;
