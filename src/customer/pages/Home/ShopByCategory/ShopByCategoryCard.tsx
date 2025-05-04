import React from "react";
import "./ShopByCategory.css";

const ShopByCategoryCard = () => {
     return (
          <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
               <div className="custom-border lg:w-[249px] lg:h-[249px] w-[150px] h-[150px] rounded-full bg-primary-color">
                    <img
                         className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top w-full h-full"
                         src="https://rukminim2.flixcart.com/image/612/612/xif0q/gas-stove/y/4/r/2-lpg-5-4-trion-cello-62-manual-original-imahaq959kgshxnf.jpeg?q=70"
                         alt=""
                    />
               </div>

               <h1>Kitchen & Table</h1>
          </div>
     );
};

export default ShopByCategoryCard;
