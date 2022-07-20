import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>ß
    </ChakraProvider>
  </React.StrictMode>
);