import { Button, Stack, TextField } from "@mui/material";
import { sendLoginSignupOtp } from "../../../State/AuthSlice";
import { useAppDispatch } from "../../../State/Store";
import { useFormik } from "formik";

const RegisterForm = () => {
     const dispatch = useAppDispatch();
     const formik = useFormik({
          initialValues: {
               email: "",
               otp: "",
               fullname: "",
          },
          onSubmit: (values) => {},
     });

     const handleSendOtp = () => {
          dispatch(sendLoginSignupOtp({ email: formik.values.email }));
     };

     return (
          <div>
               <h1 className="text-center font-bold text-xl text-primary-color pb-8">Signup</h1>

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
                              <div>
                                   <TextField
                                        fullWidth
                                        name="fullname"
                                        label="Full Name"
                                        value={formik.values.fullname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={
                                             formik.touched.fullname &&
                                             Boolean(formik.errors.fullname)
                                        }
                                        helperText={
                                             formik.touched.fullname && formik.errors.fullname
                                        }
                                   />
                              </div>
                         </div>
                    )}
                    {false && (
                         <Button
                              onClick={handleSendOtp}
                              fullWidth
                              variant="contained"
                              sx={{ py: "11px" }}
                         >
                              Send OTP
                         </Button>
                    )}

                    <Button
                         onClick={() => formik.handleSubmit()}
                         fullWidth
                         variant="contained"
                         sx={{ py: "11px" }}
                    >
                         Signup
                    </Button>
               </Stack>
          </div>
     );
};

export default RegisterForm;
