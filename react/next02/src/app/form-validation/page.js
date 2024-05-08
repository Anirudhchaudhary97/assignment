//formik --> for handling advance form action
// yup ---> for validator
// alternative---> zod,

"use client";

import React from "react";
import { useFormik } from "formik";
import { Input } from "@nextui-org/react";


import * as Yup from 'yup';
 
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

    password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password:""
    },
    validationSchema:SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="form-container flex justify-center align-middle items-center mt-40">
      
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <Input
        isClearable
        type="text"
        label="First Name"
        name="firstName"
        variant="bordered"
        placeholder="Enter your first Name"
        defaultValue="Anirudh"
        className="max-w-xs"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
        {formik.errors.firstName ? <div className="text-red-600">{formik.errors.firstName}</div> : null}
        {/* {formik.errors.firstName} */}
      <label htmlFor="lastName">Last Name</label>
      <Input
        isClearable
        type="text"
        label="Last Name"
        name="lastName"
        variant="bordered"
        placeholder="Enter your last Name"
        defaultValue="Anirudh"
        className="max-w-xs"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
       {formik.errors.lastName ? <div className="text-red-600">{formik.errors.lastName}</div> : null}
      <label htmlFor="email">Email Address</label>
      <Input
        isClearable
        type="email"
        label="Email"
        name="email"
        variant="bordered"
        placeholder="Enter your email"
        defaultValue="junior@nextui.org"
        onClear={() => console.log("input cleared")}
        className="max-w-xs"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

{formik.errors.email ? <div className="text-red-600">{formik.errors.email}</div> : null}
       <label htmlFor="Password">Password</label>
      <Input
        isClearable
        type="password"
        label="Password"
        name="password"
        variant="bordered"
        placeholder="Enter Your password"
        className="max-w-xs"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

{formik.errors.password ? <div className="text-red-600">{formik.errors.password}</div> : null}
      <button type="submit" className="bg-red-500 text-white p-3 rounded-lg mt-2 w-28 mx-12 hover:bg-red-700">Submit</button>
    </form>
   
    </div>
  );
};

export default SignupForm;
