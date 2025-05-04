import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";

const Review = () => {
     return (
          <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
               <section className="w-full md:w-1/2 lg:w-[30%] space-py-2">
                    <img
                         src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/o/z/-original-imah76jstup5zdww.jpeg?q=70"
                         alt=""
                    />
                    <div>
                         <div>
                              <p className="font-bold text-xl">Business Name</p>
                              <p className="text-lg text-gray-600">Product Title</p>
                         </div>
                         <div>
                              <div className="price flex items-center gap-3 mt-5 text-2xl">
                                   <span className="font-semibold text-gray-800">₹ 9043</span>
                                   <span className="line-through text-gray-400">₹ 3422</span>
                                   <span className="text-primary-color font-semibold">10%</span>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="space-y-5 w-full">
                    {[1, 1, 1, 1, 1, 1, 1].map((item) => (
                         <div className="space-y-3">
                              <ReviewCard />
                              <Divider />
                         </div>
                    ))}
               </section>
          </div>
     );
};

export default Review;
