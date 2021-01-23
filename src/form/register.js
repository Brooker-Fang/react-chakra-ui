import React, { useRef, useState } from 'react'
import { Input, InputGroup, InputLeftAddon, Stack, Button, useToast  } from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { EmailIcon } from '@chakra-ui/icons'
import axios from 'axios'
export default function Register () {
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const login = () => {
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    }
    setLoading(true)
    axios.post('https://conduit.productionready.io/users',{user}).then(res => {
      setLoading(false)
      toast({
        title: "Account create.",
        description: "create success",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    }).catch(e => {
      setLoading(false)
      toast({
        title: "Account create.",
        description: "create error",
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
          <Input ref={username} placeholder="请输入用户名"></Input>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<EmailIcon></EmailIcon>}></InputLeftAddon>
          <Input ref={email} placeholder="请输入邮箱"></Input>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<FaLock></FaLock>}></InputLeftAddon>
          <Input ref={password} type="password" placeholder="请输入密码"></Input>
        </InputGroup>
        <Button _hover={{opacity: 0.5}}  isLoading={loading} fontSize="18px" fontWeight="300" borderRadius="25px" bgColor="#187cb7" color="#fff" onClick={login}>注册</Button>
      </Stack>
    </form>
  )
}