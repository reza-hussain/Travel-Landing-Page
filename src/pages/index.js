import React from "react";
import Footer from "./components/footer";



import Header from "./components/header";
import Jumbotron from "./components/jumbotron";

import './styles/index.scss';

export default function Home() {
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
    <link href="http://fonts.cdnfonts.com/css/euclid-circular-a" rel="stylesheet"></link>
    <div className='main'>
    <Header />
    <Jumbotron />
    <Footer />
    </div>
    </>
  )
}
