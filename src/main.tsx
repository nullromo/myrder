import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MyrderApp } from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MyrderApp />
    </StrictMode>,
);
