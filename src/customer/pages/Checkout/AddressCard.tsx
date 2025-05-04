import { Radio } from "@mui/material";
import React from "react";

const AddressCard = () => {
     const handleChange = (event: any) => {
          console.log(event.target.checked);
     };

     return (
          <div className="p-5 border border-gray-200 rounded-md flex">
               <div className="">
                    <Radio checked={true} onChange={handleChange} value="" name="radion-button" />
               </div>
               <div className="space-y-3 pt-3">
                    <h1>Tejas</h1>
                    <p className="w-[320px]">bhuteshwar chowk, Amravati maharashtra-444605</p>
                    <p>
                         <strong>Mobile :</strong> 8903503900
                    </p>
               </div>
          </div>
     );
};

export default AddressCard;
