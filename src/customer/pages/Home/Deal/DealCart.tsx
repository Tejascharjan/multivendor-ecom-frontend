import React from "react";

const DealCart = () => {
     return (
          <div className="w-[13rem] cursor-pointer">
               <img
                    className="border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top"
                    src="https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/o/3/o/500-premium-mewa-mix-1-plastic-bottle-dailyherbs-original-imahazfv28bdfh6f.jpeg?q=70"
                    alt=""
               />
               <div className="border-4 border-black bg-black text-white p-2 text-center">
                    <p className="text-lg font-semibold">Name of Product</p>
                    <p className="text-2xl font-bold">20% OFF</p>
                    <p className="text-balance text-lg">Show Now</p>
               </div>
          </div>
     );
};

export default DealCart;
