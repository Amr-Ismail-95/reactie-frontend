import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1096416592530-fuj19tbdb8p91co301nb6pekri1h8n5f.apps.googleusercontent.com">
  <Router>
    <App />
  </Router>
  </GoogleOAuthProvider>
  </React.StrictMode>
);

