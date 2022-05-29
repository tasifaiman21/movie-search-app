import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Input, Text, Flex, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Router, { useRouter } from "next/router";

export default function MovieSearch() {
  const [value, setValue] = React.useState("");

  const [results, setResults] = useState([]);

  const handleChange = (event) => setValue(event.target.value);

  /* if (typeof window !== 'undefined') {
  
} */

  const logout = () => {
    Router.push("/");
    /*    console.log('clicked') */
    localStorage.clear();
  };

  const searchMovie = () => {
    if (value == "") {
      /*  console.log("error"); */
      alert("Please input");
    } else if (value != "") {
      axios
        .get(`http://www.omdbapi.com/?s=${value}&apikey=f7b437bc`)
        .then((res) => {
          /*      console.log(res); */
          setResults(res.data.Search);
          /*   displayResult(); */
          setValue("");
        });
    }
  };

  /*  const displayResult = () => {
    
if (results?.length == 0){
  alert('no search found')
}

};  */

  return (
    <>
      <Flex w="100vw" direction={"column"} p="5rem" gap="2rem">
        <Text mb="8px">Search Movie By name:</Text>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="searchh"
          size="sm"
        />
        <Button
          w="50%"
          alignSelf={"center"}
          colorScheme="teal"
          size="sm"
          onClick={searchMovie}
        >
         Search
        </Button>

        <Button
          w="50%"
          alignSelf={"center"}
          colorScheme="teal"
          size="sm"
          onClick={logout}
        >
          logout
        </Button>

       

        {/* 
        {results.length == 0
          ? alert("no search found")
          : results.map((result) => (
              <Movie key={result.index} result={result}></Movie>
            ))} */}
          
          
            {
            results?.map((result) => (
              <Movie key={result.index} result={result}></Movie>
            ))}
            
      </Flex>
    </>
  );
}
