Chakra-UI安装：
 yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
引入
```js
 import theme from '@chakra-ui/theme'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
ReactDOM.render(
    <ChakraProvider theme={theme}>
      <CSSReset/>
      <App />
    </ChakraProvider>,
  document.getElementById('root')
);
```