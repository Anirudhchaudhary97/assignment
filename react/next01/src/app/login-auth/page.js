'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import Login from '@/components/Login';
import Logout from '@/components/Logout';
import Protected from '@/redux/Protected';


const page = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthticated);
  const username = useSelector((state) => state.login.username);
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);

  return (
    <div className="flex justify-center items-center flex-col mt-5 gap-5">
      <h1 className='text-primary-800 text-2xl font-bold'>Authentication Example</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {` ${username} your email is ${email} and your password is ${password} `}!</p>
          <Logout />
        </div>
      ) : (
        <Login />
      )}
      <Protected>
        <div className='text-red-700 text-xl'>
          <h2>Protected Content</h2>
          <p>This content is only visible to authenticated users.</p>
        </div>
      </Protected>
    </div>
  );
};

export default page;
