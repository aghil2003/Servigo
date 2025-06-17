


// "use client";

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardHeader,
//   CardDescription,
//   CardContent,
//   CardTitle
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Separator } from '@/components/ui/separator';
// import { FcGoogle } from "react-icons/fc";
// import AxiosInstance from "@/axios/axiosInstance";
// // import {Cookie} from 'js-cookie';
// import { useRouter } from 'next/navigation';
// import OTPModal from '../modal/otp';

// export function Signup() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [otpModalOpen, setOtpModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { token, role, loading, error } = useSelector((state) => state.auth);
  

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   try {
//     const response = await AxiosInstance.post("/user", {
//       username,
//       email,
//       password,
//     });

//     const token = response.data.token;
//     console.log("API response token:", token);

//     // Cookie.set("token", token, { path: '/' }); // token should be accessible across the site


//     setOtpModalOpen(true);
//   } catch (error: any) {
//     console.error("Signup error:", error?.response?.data || error.message);
//     alert("Signup failed. Please try again.");
//   }
// };

// const handleGoogleLogin = () => {
//   window.location.href = "http://localhost:5000/auth/google"; // Replace with your backend URL
// };



//   const handleVerifyOtp = async (e: React.FormEvent,otp: string) => {
//     try {
//       setLoading(true);
//        const email ="aghilpuduruthy680623@gmail.com"
//       const res = await AxiosInstance.post('/verify-otp', { email, otp }); 
//       console.log(res.data.messag,"res.data.messag")
//       setLoading(false);
//       if(res.data.message==="OTP verified successfully"){
//         // setOtpModalOpen(false);
//         router.push('/userdashboard');
//       }
       
//     } catch (error: any) {
//       setLoading(false);
//       alert('OTP verification failed');
//       console.error("OTP error:", error?.response?.data || error.message);
//     }
//   };

//   return (
//     <>
//       <div className='h-auto flex items-center justify-center'>
//         <Card className='w-[80%] sm:w-[420px] sm:p-4'>
//           <CardHeader>
//             <CardTitle className='text-center'>Sign up</CardTitle>
//             <CardDescription className='text-sm text-center text-accent-foreground'>
//               Use email or service to create an account
//             </CardDescription>
//           </CardHeader>
//           <CardContent className='px-2 sm:px-6'>
//             <form className='space-y-3' onSubmit={handleSubmit}>
//               <Input
//                 type="text"
//                 placeholder='Full name'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <Input
//                 type="email"
//                 placeholder='Email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Input
//                 type="password"
//                 placeholder='Password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Input
//                 type="password"
//                 placeholder='Confirm password'
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//               <Button className='w-full' type="submit">Sign up</Button>
//             </form>

//             <Separator />

//             <div className='my-4 text-center text-muted-foreground text-sm'>
//               — or sign up with —
//             </div>

//             <div className='flex my-4 justify-center items-center'>
//               <Button
//                type="button"
//                variant="outline"
//                size="lg"
//                onClick={handleGoogleLogin}
//                className='bg-slate-300 hover:bg-slate-400 hover:scale-110 transition w-[300px] flex gap-2 items-center justify-center'>
//                <span className="text-base">Continue with Google</span>
//                <FcGoogle className='size-6' />
//               </Button>
//             </div>

//             <p className='text-center text-sm mt-2 text-muted-foreground'>
//               Already have an account?{' '}
//               <Link className="text-sky-700 hover:underline cursor-pointer" href="/login">
//                 Login
//               </Link>
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  OTP Modal */}
//       <OTPModal
//         isOpen={otpModalOpen}
//         onClose={() => setOtpModalOpen(false)}
//         onVerify={handleVerifyOtp}
//         loading={loading}
//       />
//     </>
//   );
// }


// "use client";

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardHeader,
//   CardDescription,
//   CardContent,
//   CardTitle
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Separator } from '@/components/ui/separator';
// import { FcGoogle } from "react-icons/fc";
// import OTPModal from '../modal/otp';
// import {registerUser } from "@/redux/Authslice";
// import AxiosInstance from "@/axios/axiosInstance";
// import type { RootState, AppDispatch } from '@/app/store';
// import Cookies from 'js-cookie';
// import jwt_decode from 'jwt-decode';




// export function Signup() {
//  const dispatch = useDispatch<AppDispatch>();
//   const router = useRouter();
//   interface DecodedToken {
//   email: string;
//   name?: string;
//   role?: string;
//   userId?: string;
//   // add more fields if needed
// }

//   // Form state
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   // OTP modal state
//   const [otpModalOpen, setOtpModalOpen] = useState(false);
//   const [localEmail, setLocalEmail] = useState('');

//   // Redux auth state
//   const { mail,loading, error, token } = useSelector((state: RootState) => state.auth);

//   // Show OTP modal after successful registration
//   useEffect(() => {
//     if (token) {
//       setOtpModalOpen(true);
//       setLocalEmail(email); // Save email to pass to OTP handler
//     }
//   }, [token]);

//   // Form validation
//   const validateForm = () => {
//     if (!username.trim()) return alert("Name is required");
//     if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return alert("Valid email required");
//     if (!password || password.length < 6) return alert("Password must be at least 6 characters");
//     if (password !== confirmPassword) return alert("Passwords do not match");
//     return true;
//   };

//   // Submit handler
//   const handleSubmit = async (e: React.FormEvent) => {
//   if (!validateForm()) return;

//   try {
//     // Await dispatch and unwrap to directly get the payload or error
//     const result = await dispatch(registerUser({ name: username, email, password })).unwrap();
//     console.log("Registered:", result);
//   } catch (err: any) {
//     console.error("Registration error:", err);
//   }
// };

// const handleVerifyOtp = async (otp: string) => {
//   const token = Cookies.get('token')
//   console.log(token,"token")
//   const decoded =jwt_decode<DecodedToken>(token);
//   const mail = decoded.email;
//   console.log(decoded,"decoded")
//   console.log(email)
//   try {
//     const res = await AxiosInstance.post('/verify-otp', { email:mail, otp });
//     if (res.data.message === "OTP verified successfully") {
//       alert("Signup successful!");
//       router.push('/userdashboard');
//     } else {
//       alert("OTP verification failed");
//     }
//   } catch (error: any) {
//     alert("OTP verification failed");
//     console.error("OTP error:", error?.response?.data || error.message);
//   }
// };
//   // Google OAuth handler
//   const handleGoogleLogin = () => {
//     const backendURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
//     window.location.href = `${backendURL}/auth/google`;
//   };

//   return (
//     <>
//       <div className='h-auto flex items-center justify-center'>
//         <Card className='w-[80%] sm:w-[420px] sm:p-4'>
//           <CardHeader>
//             <CardTitle className='text-center'>Sign up</CardTitle>
//             <CardDescription className='text-sm text-center text-accent-foreground'>
//               Use email or service to create an account
//             </CardDescription>
//           </CardHeader>
//           <CardContent className='px-2 sm:px-6'>
//             <form className='space-y-3' onSubmit={handleSubmit}>
//               <Input
//                 type="text"
//                 placeholder='Full name'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <Input
//                 type="email"
//                 placeholder='Email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Input
//                 type="password"
//                 placeholder='Password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Input
//                 type="password"
//                 placeholder='Confirm password'
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />

//               {error && <p className="text-sm text-red-500 text-center">{error}</p>}

//               <Button className='w-full' type="submit" disabled={loading}>
//                 {loading ? "Signing up..." : "Sign up"}
//               </Button>
//             </form>

//             <Separator />

//             <div className='my-4 text-center text-muted-foreground text-sm'>
//               — or sign up with —
//             </div>

//             <div className='flex my-4 justify-center items-center'>
//               <Button
//                 type="button"
//                 variant="outline"
//                 size="lg"
//                 onClick={handleGoogleLogin}
//                 className='bg-slate-300 hover:bg-slate-400 hover:scale-110 transition w-[300px] flex gap-2 items-center justify-center'>
//                 <span className="text-base">Continue with Google</span>
//                 <FcGoogle className='size-6' />
//               </Button>
//             </div>

//             <p className='text-center text-sm mt-2 text-muted-foreground'>
//               Already have an account?{' '}
//               <Link className="text-sky-700 hover:underline cursor-pointer" href="/login">
//                 Login
//               </Link>
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       <OTPModal
//         isOpen={otpModalOpen}
//         onClose={() => setOtpModalOpen(false)}
//         onVerify={handleVerifyOtp}
//         loading={loading}
//       />
//     </>
//   );
// }


// "use client";

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardHeader,
//   CardDescription,
//   CardContent,
//   CardTitle
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Separator } from '@/components/ui/separator';
// import { FcGoogle } from "react-icons/fc";
// import OTPModal from '../modal/otp';
// import { registerUser } from "@/redux/Authslice";
// import AxiosInstance from "@/axios/axiosInstance";
// import type { RootState, AppDispatch } from '@/app/store';
// import Cookies from 'js-cookie';
// import { jwtDecode } from 'jwt-decode';


// interface DecodedToken {
//   email: string;
//   name?: string;
//   role?: string;
//   userId?: string;
// }

// export function Signup() {
//   const dispatch = useDispatch<AppDispatch>();
//   const router = useRouter();

//   // Form state
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [otpModalOpen, setOtpModalOpen] = useState(false);
//   const [localEmail, setLocalEmail] = useState('');

//   const { loading, error, token } = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     if (token) {
//       setOtpModalOpen(true);
//       setLocalEmail(email);
//     }
//   }, [token]);

//   const validateForm = () => {
//     if (!username.trim()) return alert("Name is required");
//     if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return alert("Valid email required");
//     if (!password || password.length < 6) return alert("Password must be at least 6 characters");
//     if (password !== confirmPassword) return alert("Passwords do not match");
//     return true;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       await dispatch(registerUser({ name: username, email, password })).unwrap();
//       handleVerifyOtp();
//     } catch (err: any) {
//       console.error("Registration error:", err);
//     }
//   };

//   const handleVerifyOtp = async (otp: string) => {
//     const token = Cookies.get('token');
//     if (!token) {
//       alert("Token not found. Please try again.");
//       return;
//     }

//     try {
//      const decoded = jwtDecode<DecodedToken>(token);
//       const mail = decoded.email;

//       const res = await AxiosInstance.post('/verify-otp', { email: mail, otp });

//       if (res.data.message === "OTP verified successfully") {
//         alert("Signup successful!");
//         router.push('/userdashboard');
//       } else {
//         alert("OTP verification failed");
//       }
//     } catch (error: any) {
//       alert("OTP verification failed");
//       console.error("OTP error:", error?.response?.data || error.message);
//     }
//   };

//   const handleGoogleLogin = () => {
//     const backendURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
//     window.location.href = `${backendURL}/auth/google`;
//   };

//   return (
//     <>
//       <div className='h-auto flex items-center justify-center'>
//         <Card className='w-[80%] sm:w-[420px] sm:p-4'>
//           <CardHeader>
//             <CardTitle className='text-center'>Sign up</CardTitle>
//             <CardDescription className='text-sm text-center text-accent-foreground'>
//               Use email or service to create an account
//             </CardDescription>
//           </CardHeader>
//           <CardContent className='px-2 sm:px-6'>
//             <form className='space-y-3' onSubmit={handleSubmit}>
//               <Input
//                 type="text"
//                 placeholder='Full name'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <Input
//                 type="email"
//                 placeholder='Email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Input
//                 type="password"
//                 placeholder='Password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Input
//                 type="password"
//                 placeholder='Confirm password'
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />

//               {error && <p className="text-sm text-red-500 text-center">{error}</p>}

//               <Button className='w-full' type="submit" disabled={loading}>
//                 {loading ? "Signing up..." : "Sign up"}
//               </Button>
//             </form>

//             <Separator />

//             <div className='my-4 text-center text-muted-foreground text-sm'>
//               — or sign up with —
//             </div>

//             <div className='flex my-4 justify-center items-center'>
//               <Button
//                 type="button"
//                 variant="outline"
//                 size="lg"
//                 onClick={handleGoogleLogin}
//                 className='bg-slate-300 hover:bg-slate-400 hover:scale-110 transition w-[300px] flex gap-2 items-center justify-center'>
//                 <span className="text-base">Continue with Google</span>
//                 <FcGoogle className='size-6' />
//               </Button>
//             </div>

//             <p className='text-center text-sm mt-2 text-muted-foreground'>
//               Already have an account?{' '}
//               <Link className="text-sky-700 hover:underline cursor-pointer" href="/login">
//                 Login
//               </Link>
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       <OTPModal
//         isOpen={otpModalOpen}
//         onClose={() => setOtpModalOpen(false)}
//         onVerify={handleVerifyOtp}
//         loading={loading}
//       />
//     </>
//   );
// }



"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';
import { FcGoogle } from "react-icons/fc";
import OTPModal from '../modal/otp';
import { registerUser } from "@/redux/Authslice";
import AxiosInstance from "@/axios/axiosInstance";
import type { RootState, AppDispatch } from '@/app/store';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  email: string;
  name?: string;
  role?: string;
  userId?: string;
}

export function Signup() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [localEmail, setLocalEmail] = useState('');

  const { loading, error, token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token) {
      setOtpModalOpen(true);
      setLocalEmail(email);
    }
  }, [token]);

  const validateForm = () => {
    if (!username.trim()) return alert("Name is required");
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return alert("Valid email required");
    if (!password || password.length < 6) return alert("Password must be at least 6 characters");
    if (password !== confirmPassword) return alert("Passwords do not match");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await dispatch(registerUser({ name: username, email, password })).unwrap();
      // OTP modal will handle the next step
    } catch (err: any) {
      console.error("Registration error:", err);
    }
  };
   
  const decodeToken = (token: string) => {
  const decoded = jwtDecode<{ email: string }>(token); // decode and type it
  return decoded.email;
};

  const handleVerifyOtp = async (otp: string) => {
    const token = Cookies.get('token');
    console.log(token,"token");
      
    
    if (!token) {
      alert("Token not found. Please try again.");
      return;
    }
     const mail = decodeToken(token);
    try {

      const res = await AxiosInstance.post('/verify-otp', { email: mail, otp });

      if (res.data.message === "OTP verified successfully") {
        alert("Signup successful!");
        router.push('/dashboard');
      } else {
        alert("OTP verification failed");
      }
    } catch (error: any) {
      alert("OTP verification failed");
      console.error("OTP error:", error?.response?.data || error.message);
    }
  };

  const handleGoogleLogin = () => {
    const backendURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    window.location.href = `${backendURL}/auth/google`;
  };

  return (
    <>
      <div className='h-auto flex items-center justify-center'>
        <Card className='w-[80%] sm:w-[420px] sm:p-4'>
          <CardHeader>
            <CardTitle className='text-center'>Sign up</CardTitle>
            <CardDescription className='text-sm text-center text-accent-foreground'>
              Use email or service to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className='px-2 sm:px-6'>
            <form className='space-y-3' onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder='Full name'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {error && <p className="text-sm text-red-500 text-center">{error}</p>}

              <Button className='w-full' type="submit" disabled={loading}>
                {loading ? "Signing up..." : "Sign up"}
              </Button>
            </form>

            <Separator />

            <div className='my-4 text-center text-muted-foreground text-sm'>
              — or sign up with —
            </div>

            <div className='flex my-4 justify-center items-center'>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleGoogleLogin}
                className='bg-slate-300 hover:bg-slate-400 hover:scale-110 transition w-[300px] flex gap-2 items-center justify-center'>
                <span className="text-base">Continue with Google</span>
                <FcGoogle className='size-6' />
              </Button>
            </div>

            <p className='text-center text-sm mt-2 text-muted-foreground'>
              Already have an account?{' '}
              <Link className="text-sky-700 hover:underline cursor-pointer" href="/login">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>

      <OTPModal
        isOpen={otpModalOpen}
        onClose={() => setOtpModalOpen(false)}
        onVerify={handleVerifyOtp}
        loading={loading}
      />
    </>
  );
}
