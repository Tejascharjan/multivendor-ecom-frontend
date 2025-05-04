import React from "react";

const SimilarProductCard = () => {
     return (
          <div>
               <div className="group px-4 relative">
                    <div className="card">
                         <img
                              className="card-media object-top"
                              src={
                                   "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/o/z/-original-imah76jstup5zdww.jpeg?q=70"
                              }
                              alt=""
                         />
                    </div>
                    <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
                         <div className="name ">
                              <h1>Brand Name</h1>
                              <p>Product Name</p>
                         </div>
                         <div className="price flex items-center gap-3">
                              <span className="font-semibold text-gray-800">₹ 9043</span>
                              <span className="thin-line-through">₹ 3422</span>
                              <span className="text-primary-color font-semibold">10%</span>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SimilarProductCard;
