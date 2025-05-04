import {
     Button,
     FormControl,
     InputLabel,
     MenuItem,
     Select,
     Stack,
     TextField,
     Typography,
} from "@mui/material";
import { useFormik } from "formik";

const CreateDealForm = () => {
     const formik = useFormik({
          initialValues: {
               discount: 0,
               category: "",
          },
          onSubmit: (values) => {
               console.log(values);
          },
     });

     return (
          <Stack component="form" spacing={3} onSubmit={formik.handleSubmit}>
               <Typography variant="h4" className="text-center">
                    Create Deal
               </Typography>

               <TextField
                    label="Discount"
                    name="discount"
                    value={formik.values.discount}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.discount && Boolean(formik.errors.discount)}
                    helperText={formik.touched.discount && formik.errors.discount}
               />

               <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         value={formik.values.category}
                         label="Category"
                         onChange={formik.handleChange}
                    >
                         <MenuItem value={10}>Ten</MenuItem>
                         <MenuItem value={20}>Twenty</MenuItem>
                         <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
               </FormControl>
               <Button type="submit" variant="contained" fullWidth sx={{ py: ".9rem" }}>
                    Create Deal
               </Button>
          </Stack>
     );
};

export default CreateDealForm;
