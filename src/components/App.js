import React from 'react';
import SignupUser from '../containers/SignupUser';
import LoginUser from '../containers/LoginUser';

export default function App() {
  return (
    <>
      <h2>Sign Up</h2>
      <SignupUser/>
      <h2>Log In</h2>
      <LoginUser/>
    </>
  );
}