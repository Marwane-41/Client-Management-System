'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useState } from "react";




export default function Home() {

  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count + 1 ); 

  };

  const decrement = () =>{

      setCount(count - 1);
  };


  return (

      <main> 
      <h1> Client Management system </h1>
      <p> Welcome! Manage your clients effectively here.</p>

      <section>
      
      <h2> New user here ! </h2>
      <form> 
      <label htmlFor = "name"> Name :  </label>
      <input type="text" id="name" name= "name" placeholder="Enter name"></input>
      <br />

      <label htmlFor= "email"> Email: </label>
      <input type="text" id="email" name= "email" placeholder="enter email"></input>

      <br />

      <button type ="submit" >Add client </button>

      </form>

        
      </section>
      </main>



  );
}