import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { sendLoginSignupOtp, signin } from "../../../State/AuthSlice";

const LoginForm = () => {
     const dispatch = useAppDispatch();
     const { auth } = useAppSelector((store) => store);

     const formik = useFormik({
          initialValues: {
               email: "",
               otp: "",
          },
          onSubmit: (values) => {
               dispatch(signin(values));
          },
     });

     const handleSendOtp = () => {
          dispatch(sendLoginSignupOtp({ email: formik.values.email }));
     };

     return (
          <div>
               <h1 className="text-center font-bold text-xl text-primary-color pb-8">Login</h1>
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
                    {auth.otpSent && (
                         <div className="space-y-2">
                              <p className="font-medium text-sm opacity-60">
                                   Enter OTP sent to your email
                              </p>
                              <div>
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
                         </div>
                    )}
                    {auth.otpSent ? (
                         <Button
                              onClick={() => formik.handleSubmit()}
                              fullWidth
                              variant="contained"
                              sx={{ py: "11px" }}
                         >
                              Login
                         </Button>
                    ) : (
                         <Button
                              onClick={handleSendOtp}
                              fullWidth
                              variant="contained"
                              sx={{ py: "11px" }}
                         >
                              {auth.loading ? <CircularProgress color="secondary" /> : "send otp"}
                         </Button>
                    )}
               </Stack>
          </div>
     );
};

export default LoginForm;
