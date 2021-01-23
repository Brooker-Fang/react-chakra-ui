import React, { useRef } from 'react'
import { Input, InputGroup, InputLeftAddon, Stack,  Flex, Switch, Button,FormLabel,useToast  } from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import axios from 'axios'
export default function Login () {
  const toast = useToast()
  const email = useRef()
  const password = useRef()
  const login = () => {
    const user = {
      email: email.current.value,
      password: password.current.value
    }
    axios.post('https://conduit.productionready.io/users/login',{user}).then(res => {
      toast({
        title: "Account login.",
        description: "login success",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    }).catch(e => {
      toast({
        title: "Account login.",
        description: "login error",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    })
  } 
  return (
    <form>
      <Stack spacing="2">
        <InputGroup>
          <InputLeftAddon children={<FaUserAlt></FaUserAlt>}></InputLeftAddon>
          <Input ref={email} placeholder="请输入邮箱"></Input>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<FaLock></FaLock>}></InputLeftAddon>
          <Input ref={password} type="password" placeholder="请输入密码"></Input>
        </InputGroup>
        <Flex>
          <Switch id="deal" mr="3"></Switch>
          <FormLabel>记住我</FormLabel>
        </Flex>
        <Button fontSize="18px" fontWeight="300"  borderRadius="25px" bgColor="#187cb7" color="#fff" onClick={login}>登录</Button>
      </Stack>
    </form>
  )
}