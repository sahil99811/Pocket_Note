import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import rootReducer from './reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
// Create Redux store with rootReducer
const store = configureStore({
  reducer: rootReducer,
});
root.render(
  <React.StrictMode>
  {/* Provide Redux store to the entire application */}
  <Provider store={store}>
    <BrowserRouter>
      {/* Render the App component */}
      <App />
      {/* Render ToastContainer for displaying notifications */}
      <ToastContainer />
    </BrowserRouter>
  </Provider>
</React.StrictMode>,
);

