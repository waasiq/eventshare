import React, { useState, useEffect } from 'react'
import Index from './index';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const Register: React.FC =  function () {
  const { auth } = useSelector((state: any) => state);
  const navigate = useNavigate();


  useEffect(() => {
    if (auth.token) navigate('/home', { replace: true });
  }, [auth.token, navigate]);

  return (
    <Index />
  )
}

export default Register