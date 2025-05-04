import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const ReviewCard = () => {
     return (
          <div className="flex justify-between">
               <Grid container spacing={8}>
                    <Grid size={{ xs: 1 }}>
                         <Box>
                              <Avatar
                                   className="text-white"
                                   sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
                              >
                                   T
                              </Avatar>
                         </Box>
                    </Grid>
                    <Grid size={{ xs: 9 }}>
                         <div className="space-y-2">
                              <div>
                                   <p className="font-semibold text-lg">username</p>
                                   <p className="opacity-70">date</p>
                              </div>
                         </div>
                         <Rating readOnly value={4.5} precision={0.5} />
                         <p>value for money product, great product</p>
                         <div className="">
                              <img
                                   className="w-24 h-2/4 object-cover"
                                   src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/o/z/-original-imah76jstup5zdww.jpeg?q=70"
                                   alt=""
                              />
                         </div>
                    </Grid>
               </Grid>
               <div>
                    <IconButton>
                         <Delete sx={{ color: red[700] }} />
                    </IconButton>
               </div>
          </div>
     );
};

export default ReviewCard;
