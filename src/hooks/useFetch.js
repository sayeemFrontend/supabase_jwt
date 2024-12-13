import axios from '@/apis/axios';
import { useEffect, useState } from 'react';

export default function useFetch({
  end_point = '',
  method = 'get',
  body = {},
}) {
  const [data, updateData] = useState({
    isError: null,
    response: {},
    isLoading: true,
  });

  const fetchData = async () => {
    try {
      const response = await axios[method](end_point, body);
      updateData((prev) => ({
        ...prev,
        isLoading: false,
        response: response.data,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { ...data };
}
