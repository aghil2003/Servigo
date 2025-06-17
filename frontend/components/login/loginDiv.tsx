"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { loginUser } from "@/redux/Authslice";
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

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  const { token, role, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      role === "Admin" ? router.push("/dashbord") : router.push("/");
    }
  }, [token, role, router]);

  const validateForm = () => {
    let isValid = true;

    if (!email.trim()) {
      alert("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email");
      isValid = false;
    }

    if (!password.trim()) {
      alert("Password is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(loginUser({ email, password }));
    }
  };

  return (
    <div className='h-auto flex items-center justify-center'>
      <Card className='w-[80%] sm:w-[420px] sm:p-4'>
        <CardHeader>
          <CardTitle className='text-center'>Login</CardTitle>
          <CardDescription className='text-sm text-center text-accent-foreground'>
            Use email or service to login
          </CardDescription>
        </CardHeader>
        <CardContent className='px-2 sm:px-6'>
          <form className='space-y-3' onSubmit={handleSubmit}>
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
            <Button className='w-full' type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          {error && (
            <p className="text-center text-sm text-red-500 mt-2">
              {typeof error === "string" ? error : error.message || "Login failed"}
            </p>
          )}

          <Separator />

          <div className='my-4 text-center text-muted-foreground text-sm'>
            — or login with —
          </div>

          <div className='flex my-4 justify-center items-center'>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className='bg-slate-300 hover:bg-slate-400 hover:scale-110 transition w-[300px] flex gap-2 items-center justify-center'
              onClick={() => window.location.href = "http://localhost:5000/auth/google"}
            >
              <span className="text-base">Continue with Google</span>
              <FcGoogle className='size-6' />
            </Button>
          </div>

          <p className='text-center text-sm mt-2 text-muted-foreground'>
            Create new account?{' '}
            <Link className="text-sky-700 hover:underline cursor-pointer" href="/register">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}





// "use client";

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie'
// import { loginUser } from "@/redux/Authslice";
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

// export function Login() {
  
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { token, role, loading, error } = useSelector((state) => state.auth);

//  useEffect(() => {
//     if (token) {
//       role === "Admin" ? navigate("/dashbord") : navigate("/");
//     }
//   }, [token, role, navigate]);

//   const validateForm = () => {
//     const errors = { email: "", password: "" };
//     let isValid = true;

//     if (!email.trim()) {
//       errors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "Please enter a valid email";
//       isValid = false;
//     }

//     if (!password.trim()) {
//       errors.password = "Password is required";
//       isValid = false;
//     }

   
//     return isValid;
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       dispatch(loginUser({ email, password }));
//     }
//   };

//   return (
//     <div className='h-auto flex items-center justify-center'>
//       <Card className='w-[80%] sm:w-[420px] sm:p-4'>
//         <CardHeader>
//           <CardTitle className='text-center'>
//             Login
//           </CardTitle>
//           <CardDescription className='text-sm text-center text-accent-foreground'>
//             Use email or service to login
//           </CardDescription>
//         </CardHeader>
//         <CardContent className='px-2 sm:px-6'>
//           <form className='space-y-3' onSubmit={handleSubmit}>
//             <Input
//               type="email"
//               placeholder='Email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               type="password"
//               placeholder='Password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button className='w-full' type="submit">
//               Login
//             </Button>
//           </form>

//           <Separator />

//           <div className='my-4 text-center text-muted-foreground text-sm'>
//             — or login up with —
//           </div>

//           <div className='flex my-4 justify-center items-center'>
//             {/* <Button
//               type="button"
//               variant="outline"
//               size="lg"
//               className='bg-slate-300 hover:bg-slate-400 hover:scale-110 transition w-[300px] flex gap-2 items-center justify-center'
//             >
//               <span className="text-base">Continue with Google</span>
//               <FcGoogle className='size-6' />
//             </Button> */}
//             <Button
//   type="button"
//   variant="outline"
//   size="lg"
//   className='bg-slate-300 hover:bg-slate-400 hover:scale-110 transition w-[300px] flex gap-2 items-center justify-center'
//   onClick={() => window.location.href = "http://localhost:5000/auth/google"}
// >
//   <span className="text-base">Continue with Google</span>
//   <FcGoogle className='size-6' />
// </Button>
//           </div>

//           <p className='text-center text-sm mt-2 text-muted-foreground'>
//             create new account?{' '}
//             <Link className="text-sky-700 hover:underline cursor-pointer" href="#">
//               Sign up
//             </Link>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }





// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../redux/authSlice";

// export default function LoginPage() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { token, role, loading, error } = useSelector((state) => state.auth);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//      const [formError, setFormError] = useState({
//      email: "",
//      password: "",
//      });

//   useEffect(() => {
//     if (token) {
//       role === "Admin" ? navigate("/dashbord") : navigate("/");
//     }
//   }, [token, role, navigate]);

//   const validateForm = () => {
//     const errors = { email: "", password: "" };
//     let isValid = true;

//     if (!email.trim()) {
//       errors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "Please enter a valid email";
//       isValid = false;
//     }

//     if (!password.trim()) {
//       errors.password = "Password is required";
//       isValid = false;
//     }

//     setFormError(errors);
//     return isValid;
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       dispatch(loginUser({ email, password }));
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
//         {error && (
//   <p className="text-center text-sm text-red-500">
//     {typeof error === "string" ? error : error.message || "Something went wrong"}
//   </p>
// )}


//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-gray-600 text-sm mb-1">Email</label>
//             <input
//               type="text"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {formError.email && (
//               <p className="text-sm text-red-500 mt-1">{formError.email}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-gray-600 text-sm mb-1">Password</label>
//             <input
//               type="password"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//              {formError.password && (
//               <p className="text-sm text-red-500 mt-1">{formError.password}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <p className="text-center text-sm text-gray-500 mt-4">
//              Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// }


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//      try {
//     const response = await AxiosInstance.post("/login", {
//       email,
//       password,
//     });

//     const token = response.data.token;
//     console.log("API response token:", token);
//     Cookies.set('token', token);
//     if(token){
//       router.push("/dashboard")
//     }

//   } catch (error: any) {
//     console.error("Signup error:", error?.response?.data || error.message);
//     alert("Signup failed. Please try again.");
//   }
// };
