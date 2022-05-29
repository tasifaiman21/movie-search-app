import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Spinner,Flex  } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieHero from "../components/MovieHero";
import Router, { useRouter } from "next/router";

export default function MovieSearch() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    var x = localStorage.getItem("isLogin");

    console.log(x);

    if (x !== "true") {
      Router.push("/");
    } else {
      setIsLoading(false);
    }
  }, []);


  return <>{isLoading ? <Flex w='100vw' h="100%" alignItems={'center'} justifyContent='center' ><Spinner

    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  /> </Flex>: <MovieHero />}</>;
}
