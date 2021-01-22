import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from '@chakra-ui/theme'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

ReactDOM.render(
    <ChakraProvider theme={theme}>
      <CSSReset/>
      <App />
    </ChakraProvider>,
  document.getElementById('root')
);

