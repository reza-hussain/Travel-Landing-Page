import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./components/footer";



import Header from "./components/header";
import Jumbotron from "./components/jumbotron";

import './styles/index.scss';

export default function Home() {
  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
    </Helmet>
    <div className='main'>
    <Header />
    <Jumbotron />
    <Footer />
    </div>
    </>
  )
}
