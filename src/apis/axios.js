import axios from 'axios';
const supaBaseApiKey = import.meta.env.VITE_SUPABASE_APIKEY;
export default axios.create({
  baseURL: 'https://oaehownnhwdcpnsvptgr.supabase.co/auth/v1',
  headers: {
    Apikey: supaBaseApiKey,
  },
});
