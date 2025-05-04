import { Divider } from "@mui/material";
import React from "react";

const PricingCart = () => {
     return (
          <>
               <div className="space-y-3 p-5">
                    <div className="flex justify-between items-center">
                         <span>Subtotal</span>
                         <span>₹430</span>
                    </div>

                    <div className="flex justify-between items-center">
                         <span>Discount</span>
                         <span>₹99</span>
                    </div>

                    <div className="flex justify-between items-center">
                         <span>Shipping</span>
                         <span>₹49</span>
                    </div>

                    <div className="flex justify-between items-center">
                         <span>Platform Fee</span>
                         <span>free</span>
                    </div>
               </div>
               <Divider />
               <div className="flex justify-between items-center p-5 text-primary-color">
                    <span>Total</span>
                    <span>₹430</span>
               </div>
          </>
     );
};

export default PricingCart;
