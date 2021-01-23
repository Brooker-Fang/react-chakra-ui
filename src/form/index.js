import React from 'react'
import { Tabs, TabList, Tab, TabPanel, TabPanels, Box} from '@chakra-ui/react'
import Login from './login'
import Register from './register'

export default function Form() {
  return <Box p={3} w="400px" boxShadow="lg" borderRadius="lg">
    <Tabs isFitted variant="unstyled">
      <TabList>
        <Tab _focus={{boxShadow: 'none'}} _selected={{ color: "#ea6f5a", borderBottom: '2px solid #ea6f5a' }}>登录</Tab>
        <Tab _focus={{boxShadow: 'none'}} _selected={{ color: "#ea6f5a", borderBottom: '2px solid #ea6f5a' }}>注册</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Login></Login>
        </TabPanel>
        <TabPanel>
          <Register></Register>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
}