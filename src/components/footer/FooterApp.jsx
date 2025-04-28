import React from 'react';
import { createRoot } from 'react-dom/client';
import FooterMain from './FooterMain'; // Assuming App.jsx
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(

    <BrowserRouter>
      <FooterMain />
    </BrowserRouter>

);