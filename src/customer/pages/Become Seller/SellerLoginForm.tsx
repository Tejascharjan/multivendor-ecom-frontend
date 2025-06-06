import { Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { sendLoginSignupOtp } from "../../../State/AuthSlice";
import { sellerLogin } from "../../../State/seller/SellerAuthSlice";
import { useAppDispatch } from "../../../State/Store";

const SellerLoginForm = () => {
     const dispatch = useAppDispatch();
     const formik = useFormik({
          initialValues: {
               email: "",
               otp: "",
          },
          onSubmit: (values) => {
               console.log("Form Data", values);
               // values.otp = Number(values.otp);
               dispatch(sellerLogin({ email: values.email, otp: values.otp }));
          },
     });

     const handleSendOtp = () => {
          dispatch(sendLoginSignupOtp({ email: formik.values.email }));
     };

     return (
          <div>
               <h1 className="text-center font-bold text-xl text-primary-color pb-5">
                    Login As Seller
               </h1>
               <Stack spacing={3}>
                    <TextField
                         fullWidth
                         name="email"
                         label="Email"
                         value={formik.values.email}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         error={formik.touched.email && Boolean(formik.errors.email)}
                         helperText={formik.touched.email && formik.errors.email}
                    />
                    {true && (
                         <div className="space-y-2">
                              <p className="font-medium text-sm opacity-60">
                                   Enter OTP sent to your email
                              </p>
                              <TextField
                                   fullWidth
                                   name="otp"
                                   label="Otp"
                                   value={formik.values.otp}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   error={formik.touched.otp && Boolean(formik.errors.otp)}
                                   helperText={formik.touched.otp && formik.errors.otp}
                              />
                         </div>
                    )}
                    <Button
                         onClick={handleSendOtp}
                         fullWidth
                         variant="contained"
                         sx={{ py: "11px" }}
                    >
                         Send OTP
                    </Button>

                    <Button
                         onClick={() => formik.handleSubmit()}
                         fullWidth
                         variant="contained"
                         sx={{ py: "11px" }}
                    >
                         Login
                    </Button>
               </Stack>
          </div>
     );
};

export default SellerLoginForm;
