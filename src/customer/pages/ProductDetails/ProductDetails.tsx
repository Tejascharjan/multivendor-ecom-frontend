import {
     Add,
     AddShoppingCart,
     FavoriteBorder,
     LocalShipping,
     Remove,
     Shield,
     Star,
     Wallet,
     WorkspacePremium,
} from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";
import SimilarProducts from "./SimilarProducts";
import ReviewCard from "../Review/ReviewCard";

const ProductDetails = () => {
     const [quantity, setQuantity] = React.useState(1);
     return (
          <div className="px-5 lg:px-20 pt-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <section className="flex flex-col lg:flex-row gap-5">
                         <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
                              {[1, 1, 1, 1].map((item) => (
                                   <img
                                        className="lg:w-full w-[50px] cursor-pointer rounded-md"
                                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/o/z/-original-imah76jstup5zdww.jpeg?q=70"
                                   />
                              ))}
                         </div>
                         <div className="w-full lg:w-[85%]">
                              <img
                                   className=" w-full rounded-md"
                                   src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/o/z/-original-imah76jstup5zdww.jpeg?q=70"
                                   alt=""
                              />
                         </div>
                    </section>

                    <section>
                         <h1 className="font-bold text-lg text-primary-color">Brand Name</h1>
                         <p className="text-gray-500 font-semibold">Product Title</p>
                         <div className="flex justify-between items-center py-2 border border-gray-200 w-[180px] px-3 mt-5">
                              <div className="flex gap-1 items-center">
                                   <span>4</span>
                                   <Star sx={{ color: teal[500], fontSize: "17px" }} />
                              </div>
                              <Divider orientation="vertical" flexItem />
                              <span>232 Ratings</span>
                         </div>
                         <div>
                              <div className="price flex items-center gap-3 mt-5 text-2xl">
                                   <span className="font-semibold text-gray-800">₹ 9043</span>
                                   <span className="line-through text-gray-400">₹ 3422</span>
                                   <span className="text-primary-color font-semibold">10%</span>
                              </div>
                              <p className="text-sm">
                                   Inclusive of all taxes. Free Shipping above ₹1500
                              </p>
                         </div>
                         <div className="mt-7 space-y-3">
                              <div className="flex items-center gap-4">
                                   <Shield sx={{ color: teal[500] }} />
                                   <p>Authentic & Quality Assured</p>
                              </div>
                              <div className="flex items-center gap-4">
                                   <WorkspacePremium sx={{ color: teal[500] }} />
                                   <p>100% money back guarantee</p>
                              </div>
                              <div className="flex items-center gap-4">
                                   <LocalShipping sx={{ color: teal[500] }} />
                                   <p>Free Shipping & Returns </p>
                              </div>
                              <div className="flex items-center gap-4">
                                   <Wallet sx={{ color: teal[500] }} />
                                   <p>Pay on delivery might be available</p>
                              </div>
                         </div>
                         <div className="mt-7 space-y-2">
                              <h1>Quantity</h1>
                              <div className="flex items-center gap-2 w-[140px] justify-between">
                                   <Button
                                        disabled={quantity == 1}
                                        onClick={() => setQuantity(quantity - 1)}
                                   >
                                        <Remove />
                                   </Button>
                                   <span>{quantity}</span>
                                   <Button onClick={() => setQuantity(quantity + 1)}>
                                        <Add />
                                   </Button>
                              </div>
                         </div>

                         <div className="mt-12 flex items-center gap-5">
                              <Button
                                   fullWidth
                                   variant="contained"
                                   startIcon={<AddShoppingCart />}
                                   sx={{ py: "1rem" }}
                              >
                                   Add to Bag
                              </Button>

                              <Button
                                   fullWidth
                                   variant="outlined"
                                   startIcon={<FavoriteBorder />}
                                   sx={{ py: "1rem" }}
                              >
                                   Add to Whishlist
                              </Button>
                         </div>
                         <div className="mt-5">
                              <p>
                                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                   Quisquam, facere ea. Sit facere commodi distinctio harum. Minima
                                   asperiores neque corporis?
                              </p>
                         </div>
                         <div className="mt-7 space-y-5">
                              <ReviewCard />
                              <Divider />
                         </div>
                    </section>
               </div>

               <div className="mt-20">
                    <h1 className="text-lg font-bold">Similar Products</h1>
                    <div className="pt-5">
                         <SimilarProducts />
                    </div>
               </div>
          </div>
     );
};

export default ProductDetails;
