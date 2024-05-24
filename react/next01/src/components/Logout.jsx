'use client'
import React from 'react';
import { Button } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { logoutAuth } from '@/redux/reduxSlices/loginAuthSlice';

const Logout = () => {
  const dispatch = useDispatch();

  return(
    <div className='flex items-center justify-center'>
     <Button onClick={() => dispatch(logoutAuth())} color='danger' variant='ghost'>Logout</Button> </div>
  ) 
};

export default Logout;
