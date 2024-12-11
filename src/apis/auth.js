import { createClient } from '@supabase/supabase-js';
import { cookeStorage } from './cookies';

const base_url =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_BASE_URL_DEV
    : import.meta.env.VITE_BASE_URL_PROD;

const supaBaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supaBase = createClient(base_url, supaBaseKey);

export async function signUp(formData, onSuccess = null, onFail = null) {
  const { data, error } = await supaBase.auth.signUp({
    ...formData,
    options: { emailRedirectTo: 'login' },
  });

  if (error && onFail) {
    onFail(error);
    return;
  }

  if (data && onSuccess) {
    onSuccess(data);
  }
}

export async function signIn(formData, onSuccess = null, onFail = null) {
  const { data, error } = await supaBase.auth.signInWithPassword({
    ...formData,
  });

  error && onFail && onFail(error);
  if (error) return;

  const { access_token, refresh_token, expires_at } = data.session;
  cookeStorage.setCooke('token', access_token, expires_at);
  cookeStorage.setCooke('refresh_token', refresh_token);

  onSuccess && onSuccess(data);
}

export async function logout(fn = null) {
  const response = await supaBase.auth.signOut();
  if (!response.error) {
    fn(response);
    cookeStorage.clearCooke(['token', 'refresh_token']);
  }
}
