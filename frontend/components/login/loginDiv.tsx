"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
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

export function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     try {
    const response = await AxiosInstance.post("/login", {
      email,
      password,
    });

    const token = response.data.token;
    console.log("API response token:", token);
    if(token){
      router.push("/userdashboard")
    }

  } catch (error: any) {
    console.error("Signup error:", error?.response?.data || error.message);
    alert("Signup failed. Please try again.");
  }
};

  return (
    <div className='h-auto flex items-center justify-center'>
      <Card className='w-[80%] sm:w-[420px] sm:p-4'>
        <CardHeader>
          <CardTitle className='text-center'>
            Login
          </CardTitle>
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
            <Button className='w-full' type="submit">
              Login
            </Button>
          </form>

          <Separator />

          <div className='my-4 text-center text-muted-foreground text-sm'>
            — or login up with —
          </div>

          <div className='flex my-4 justify-center items-center'>
            {/* <Button
              type="button"
              variant="outline"
              size="lg"
              className='bg-slate-300 hover:bg-slate-400 hover:scale-110 transition w-[300px] flex gap-2 items-center justify-center'
            >
              <span className="text-base">Continue with Google</span>
              <FcGoogle className='size-6' />
            </Button> */}
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
            create new account?{' '}
            <Link className="text-sky-700 hover:underline cursor-pointer" href="#">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
