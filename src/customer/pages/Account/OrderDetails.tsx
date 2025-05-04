import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payment, Payments } from "@mui/icons-material";

const OrderDetails = () => {
     const navigate = useNavigate();
     return (
          <Box className="space-y-5">
               <section className="flex flex-col gap-5 justify-center items-center">
                    <img
                         className="w-[180px]"
                         src={
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                         }
                         alt=""
                    />
                    <div className="text-sm space-y-1 text-center">
                         <h1 className="font-bold">{"Virani Clothing"}</h1>
                         <p>{"Prodcut Title"}</p>
                         <p>
                              <strong>Size : </strong> M
                         </p>
                    </div>
                    <div>
                         <Button onClick={() => navigate(`/reviews/${5}/create`)}>
                              Write Review
                         </Button>
                    </div>
               </section>

               <section className="border border-gray-200 p-5">
                    <OrderStepper orderStatus={"SHIPPED"} />
               </section>

               <div className="border border-gray-200 p-5">
                    <h1 className="font-bold pb-3">Delivery Address</h1>
                    <div className=" text-sm space-y-2">
                         <div className="flex gap-5 font-medium">
                              <p>{"tejas"}</p>
                              <Divider flexItem orientation="vertical" />
                              <p>{9909409056}</p>
                         </div>
                         <p>Bhuteshwar chowk, Amravati</p>
                    </div>
               </div>

               <div className="border border-gray-200 space-y-4">
                    <div className="flex justify-between text-sm pt-5 px-5">
                         <div className="space-y-1">
                              <p className="font-bold">Total Item Price</p>
                              <p>
                                   You Saved
                                   <span className="text-green-500 font-medium text-xs">
                                        ₹{699}.00
                                   </span>{" "}
                                   on this item
                              </p>
                         </div>
                         <p className="font-medium">₹{799}.00</p>
                    </div>
                    <div className="px-5">
                         <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
                              <Payments />
                              <p>Pay on Delivery</p>
                         </div>
                    </div>
                    <Divider />

                    <div className="px-5 pb-5">
                         <p className="text-xs">
                              <strong>Sold by : </strong>
                              {"Virani Clothing"}
                         </p>
                    </div>

                    <div className="p-10">
                         <Button
                              disabled={true}
                              color="error"
                              sx={{ py: "0.7rem" }}
                              variant="outlined"
                              fullWidth
                         >
                              {true ? "Order Cancelled" : "Cancel Order"}
                         </Button>
                    </div>
               </div>
          </Box>
     );
};

export default OrderDetails;
