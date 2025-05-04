import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Favorite, ModeComment, Translate } from "@mui/icons-material";
import { Button } from "@mui/material";
import { teal } from "@mui/material/colors";

const images = [
     "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/v/i/-original-imah76cazsbbt8hu.jpeg?q=70&crop=false",
     "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/o/z/-original-imah76jstup5zdww.jpeg?q=70",
];
const ProductCard = () => {
     const [currentImage, setCurrentImage] = useState(0);
     const [isHovered, setIsHovered] = useState(false);

     useEffect(() => {
          let interval: any;
          if (isHovered) {
               interval = setInterval(() => {
                    setCurrentImage(
                         (prevImage) => (prevImage + 1) % images.length
                    );
               }, 1000);
          } else if (interval) {
               clearInterval(interval);
               interval = null;
          }
          return () => clearInterval(interval);
     }, [isHovered]);

     return (
          <>
               <div className="group px-4 relative">
                    <div
                         className="card"
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}
                    >
                         {images.map((item, index) => (
                              <img
                                   className="card-media object-top"
                                   src={item}
                                   alt=""
                                   style={{
                                        transform: `translateX(${
                                             (index - currentImage) * 100
                                        }%)`,
                                   }}
                              />
                         ))}

                         {isHovered && (
                              <div className="indicator flex flex-col items-center space-y-2">
                                   <div className="flex gap-3">
                                        <Button
                                             variant="contained"
                                             color="secondary"
                                        >
                                             <Favorite
                                                  sx={{ color: teal[500] }}
                                             />
                                        </Button>

                                        <Button
                                             variant="contained"
                                             color="secondary"
                                        >
                                             <ModeComment
                                                  sx={{ color: teal[500] }}
                                             />
                                        </Button>
                                   </div>
                              </div>
                         )}
                    </div>
                    <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
                         <div className="name ">
                              <h1>Brand Name</h1>
                              <p>Product Name</p>
                         </div>
                         <div className="price flex items-center gap-3">
                              <span className="font-semibold text-gray-800">
                                   ₹ 9043
                              </span>
                              <span className="thin-line-through">₹ 3422</span>
                              <span className="text-primary-color font-semibold">
                                   10%
                              </span>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default ProductCard;
