


"use client";

import React, { useState } from 'react';
import Link from 'next/link';
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
import AxiosInstance from "@/axios/axiosInstance";
// import {Cookie} from 'js-cookie';
import { useRouter } from 'next/navigation';
import OTPModal from '../modal/otp';

export function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await AxiosInstance.post("/user", {
      username,
      email,
      password,
    });

    const token = response.data.token;
    console.log("API response token:", token);

    // Cookie.set("token", token, { path: '/' }); // token should be accessible across the site


    setOtpModalOpen(true);
  } catch (error: any) {
    console.error("Signup error:", error?.response?.data || error.message);
    alert("Signup failed. Please try again.");
  }
};

const handleGoogleLogin = () => {
  window.location.href = "http://localhost:5000/auth/google"; // Replace with your backend URL
};



  const handleVerifyOtp = async (e: React.FormEvent,otp: string) => {
    e.preventDefault();
    try {
      setLoading(true);
       const email ="aghilpuduruthy680623@gmail.com"
      const res = await AxiosInstance.post('/verify-otp', { email, otp }); 
      console.log(res.data.messag,"res.data.messag")
      setLoading(false);
      if(res.data.message==="OTP verified successfully"){
        // setOtpModalOpen(false);
        router.push('/userdashboard');
      }
       
    } catch (error: any) {
      setLoading(false);
      alert('OTP verification failed');
      console.error("OTP error:", error?.response?.data || error.message);
    }
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
              <Button className='w-full' type="submit">Sign up</Button>
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

      {/*  OTP Modal */}
      <OTPModal
        isOpen={otpModalOpen}
        onClose={() => setOtpModalOpen(false)}
        onVerify={handleVerifyOtp}
        loading={loading}
      />
    </>
  );
}
