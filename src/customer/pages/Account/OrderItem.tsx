import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
     return (
          <div className="text-sm bg-white p-5 space-y-4 border border-gray-200 rounded-md cursor-pointer">
               <div className="flex items-center gap-5">
                    <div>
                         <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
                              <ElectricBolt />
                         </Avatar>
                    </div>
                    <div className="">
                         <h1 className="font-bold text-primary-color">Pending</h1>
                         <p>Arriving By Sat, 26 Apr</p>
                    </div>
               </div>
               <div className="p-5 bg-teal-50 flex gap-3">
                    <div>
                         <img
                              className="w-[70px]"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                              alt=""
                         />
                    </div>
                    <div className="w-full space-y-2">
                         <h1 className="font-bold">Virani Clothing</h1>
                         <p>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
                              consequatur vero modi nobis natus possimus voluptatum ullam, aperiam
                              recusandae harum?
                         </p>
                         <p>
                              <strong>size : </strong>
                              FREE
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default OrderItem;
