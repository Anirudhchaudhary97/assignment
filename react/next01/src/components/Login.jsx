 'use client'
import React, { useState } from 'react';
import { Button,Input } from '@nextui-org/react';
import { useDispatch, useSelector} from 'react-redux';
import { loginAuth } from '@/redux/reduxSlices/loginAuthSlice';

const Login = () => {
  const [userName, setUserName] = useState('');
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const dispatch = useDispatch();
  const username=useSelector(state=>state.login.username)
  const Email=useSelector(state=>state.login.email)
  const Password=useSelector(state=>state.login.password)


  const handleSubmit = (e) => {
    e.preventDefault();
    
      dispatch(loginAuth({username:userName,email,password}));
    
  };

  return (
    <div className='flex justify-center items-center'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 bg-gray-600 p-4'>
         {/* {username && Email && Password &&<p>Logged in as: {username} {Email} {Password}</p>} */}

         <Input
         required
         variant='faded'
         size='lg'
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your name"
      />
      <Input
        required
        variant='faded'
        size='lg'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
      />
      <Input
        required
        variant='faded'
        size='lg'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <Button type="submit">Login</Button>
    </form>
    </div>
  );
};

export default Login;
