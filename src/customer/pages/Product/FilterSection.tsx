import {
     Button,
     Divider,
     FormControl,
     FormControlLabel,
     FormLabel,
     Radio,
     RadioGroup,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";
import { colors } from "../../../data/filter/colors";
import { useSearchParams } from "react-router-dom";
import { prices } from "../../../data/filter/prices";
import { discounts } from "../../../data/filter/discount";

const FilterSection = () => {
     const [expendColor, setExpendColor] = useState(false);
     const [searchParams, setSearchParams] = useSearchParams();

     const handleColorToggle = () => {
          setExpendColor(!expendColor);
     };

     const updateFilterParams = (e: any) => {
          const { value, name } = e.target;
          if (value) {
               searchParams.set(name, value);
          } else {
               searchParams.delete(name);
          }
          setSearchParams(searchParams);
     };

     const clearAllFilters = () => {
          searchParams.forEach((value: any, key: any) => {
               searchParams.delete(key);
          });
          setSearchParams(searchParams);
     };

     return (
          <div className="-z-50 space-y-5 bg-white">
               <div className="flex items-center justify-between h-[40px] px-9 border-gray-300 lg:border-r">
                    <p className="text-lg font-semibold">Filters</p>
                    <Button
                         onClick={clearAllFilters}
                         size="small"
                         className="text-teal-600 cursor-pointer font-semibold"
                    >
                         clear all
                    </Button>
               </div>
               <Divider />
               <div className="px-9 space-y-6">
                    <section>
                         <FormControl>
                              <FormLabel
                                   sx={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        color: teal[500],
                                        paddingY: "14px",
                                   }}
                                   className="text-2xl font-semibold"
                                   id="color"
                              >
                                   Color
                              </FormLabel>

                              <RadioGroup
                                   aria-labelledby="color"
                                   defaultValue=""
                                   onChange={updateFilterParams}
                                   name="color"
                              >
                                   {colors.slice(0, expendColor ? colors.length : 5).map((item) => (
                                        <FormControlLabel
                                             value={item.name}
                                             control={<Radio />}
                                             label={
                                                  <div className="flex items-center gap-3">
                                                       <p>{item.name}</p>
                                                       <p
                                                            style={{ backgroundColor: item.hex }}
                                                            className={`h-5 w-5 rounded-full ${
                                                                 item.name === "White"
                                                                      ? "border-gray-400 border"
                                                                      : ""
                                                            }`}
                                                       ></p>
                                                  </div>
                                             }
                                        />
                                   ))}
                              </RadioGroup>
                         </FormControl>
                         <div>
                              <Button
                                   onClick={handleColorToggle}
                                   className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center"
                              >
                                   {expendColor ? "hide" : `+${colors.length - 5} more`}
                              </Button>
                         </div>
                    </section>
                    <Divider />
                    <section>
                         <FormControl>
                              <FormLabel
                                   sx={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        paddingY: "14px",
                                        color: teal[500],
                                   }}
                                   className="text-2xl font-semibold"
                                   id="price"
                              >
                                   Price
                              </FormLabel>
                              <RadioGroup
                                   name="price"
                                   onChange={updateFilterParams}
                                   aria-labelledby="price"
                                   defaultValue=""
                              >
                                   {prices.map((item) => (
                                        <FormControlLabel
                                             key={item.name}
                                             value={item.value}
                                             control={<Radio size="small" />}
                                             label={item.name}
                                        />
                                   ))}
                              </RadioGroup>
                         </FormControl>
                    </section>
                    <Divider />

                    <section>
                         <FormControl>
                              <FormLabel
                                   sx={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        paddingY: "14px",
                                        color: teal[500],
                                   }}
                                   className="text-2xl font-semibold"
                                   id="discount"
                              >
                                   Discount
                              </FormLabel>
                              <RadioGroup
                                   name="discount"
                                   onChange={updateFilterParams}
                                   aria-labelledby="price"
                                   defaultValue=""
                              >
                                   {discounts.map((item) => (
                                        <FormControlLabel
                                             key={item.name}
                                             value={item.value}
                                             control={<Radio size="small" />}
                                             label={item.name}
                                        />
                                   ))}
                              </RadioGroup>
                         </FormControl>
                    </section>
               </div>
          </div>
     );
};

export default FilterSection;
