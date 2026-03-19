import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MyrderApp } from './myrderApp';
import './styles/index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MyrderApp />
    </StrictMode>,
);
