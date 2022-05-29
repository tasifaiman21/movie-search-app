import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Input, Text, Flex, Button,InputGroup,InputRightElement } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Router, {useRouter} from 'next/router';
import axios from "axios";



export default function Home() {

 


  const [email, setEmail] = React.useState('')
  const handleEmail = (event) => setEmail(event.target.value)


  const [pass, setPass] = React.useState('')
  const handlePass = (event) => setPass(event.target.value)
 
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  

const login = () =>{
  if (email == 'aiman@gmail.com' && pass == 'aimanjs') {
  
    setEmail('aiman@gmail.com')
    setPass('aimanjs')
    Router.push("/movie-search") 
  

    localStorage.setItem("isLogin", 'true'); 
  }

  else{ alert("email and pass word not matched")}



}



  return (
    <Flex direction={"column"} w="100vw" p="5rem" gap="2rem">

    <Flex w="50%"  alignItems="center" gap="2rem">
    <Text mb='8px'>Email</Text>
    <Input
      value={email}
      onChange={handleEmail}
      placeholder='email'
      size='sm'
    />
    </Flex>


    <Flex w="50%"  alignItems="center" gap="1rem">
    <Text mb='8px'>Password</Text>
    <InputGroup size='md'>
    <Input
    value={pass}
    onChange={handlePass}
      pr='4.5rem'
      type={show ? 'text' : 'password'}
      placeholder='Enter password'
    />
    <InputRightElement width='4.5rem'>
      <Button h='1.75rem' size='sm' onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </Button>
    </InputRightElement>
  </InputGroup>
    </Flex>
    

    <Flex>
    
    <Button
    w="50%"
  
    colorScheme="teal"
    size="sm"
    onClick={login}
  >
 Login
  </Button>
    </Flex>
    </Flex>
  );
}
