'use client'
import React from 'react';
import { useSelector } from 'react-redux';

const Protected = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.login.isAuthticated);

  return isAuthenticated ? children : <p>You need to log in to view this content.</p>;
};

export default Protected;
