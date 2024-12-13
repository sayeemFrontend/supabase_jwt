import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootComponent from './routes/RootElement';
import ThemeProvider from './context/ThemeProvider';
import AuthProvider from './context/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<RootComponent />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
