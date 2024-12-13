// import { createClient } from '@supabase/supabase-js';
import { cookeStorage } from './cookies';
import axios from './axios';

const base_url =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_BASE_URL_DEV
    : import.meta.env.VITE_BASE_URL_PROD;

const supaBaseKey = import.meta.env.VITE_SUPABASE_KEY;
// export const supaBase = createClient(base_url, supaBaseKey);

export async function signUp({
  formData = {},
  onSuccess = null,
  onFail = null,
}) {
  try {
    const response = await axios.post('token?grant_type=password', {
      ...formData,
    });
    onSuccess && onSuccess(response.data);
  } catch (err) {
    onFail && onFail(err);
  }
}

export async function signIn({
  formData = {},
  onSuccess = null,
  onFail = null,
}) {
  try {
    const response = await axios.post('token?grant_type=password', {
      ...formData,
    });

    onSuccess && onSuccess(response.data);
  } catch (err) {
    onFail && onFail(err);
  }
}

export async function logout(fn = null) {
  const response = axios.get('');
  if (!response.error) {
    fn(response);
    cookeStorage.clearCooke(['token', 'refresh_token']);
  }
}
