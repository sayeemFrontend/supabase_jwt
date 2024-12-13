import React from 'react';
import { useAuth } from './useAuth';
import axios from '@/apis/axios';

export default function useRefreshToken() {
  const { setAuth, auth } = useAuth();

  console.log(auth);

  const refresh = async () => {
    try {
      const response = await axios.post('/token?grant_type=refresh_token');
      //   setAuth
      console.log();
    } catch (err) {
      console.log(err);
    }
  };

  return <div>useRefreshToken</div>;
}
