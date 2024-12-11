import axios from 'axios';

const base_url =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_BASE_URL_DEV
    : import.meta.env.VITE_BASE_URL_PROD;

const token = '';

// export async function apiClient({
//   end_point = '',
//   method = 'GET',
//   onSuccess = null,
//   onFail = null,
//   ...options
// }) {
//   try {
//     const response = await axios(`${base_url}/${end_point}`, {
//       method: method,
//       headers: {
//         Authorization: `bear ${token}`,
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       ...options,
//     });

//     if (onSuccess) {
//       return onSuccess(response.data);
//     }
//     return response.data;
//   } catch (err) {
//     handleApiError(err);
//     if (onFail) {
//       return onFail(err);
//     }

//     //handle
//   }
//   return null;
// }

const handleApiError = (error) => {
  if (error.response) {
    // Server responded with a status code outside the 2xx range
    console.error(
      error.message ||
        error.response.statusText ||
        error.code ||
        'Unknown error'
    );
  } else if (error.request) {
    // No response was received
    console.error('No response received:', error.request);
  } else {
    // Other errors
    console.error('Error:', error.message);
  }
};

const statusCode = {
  404: 'Requested API not Found',
};
