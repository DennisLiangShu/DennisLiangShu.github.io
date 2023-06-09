import React from 'react';
import "../../App.css";
import Landing from "../Landing";
import Cards from "../Cards";
import About from "../About";
import Footer from "../Footer";

function Home () {
    return (
        

        <>
            <Landing/>
            <About/>
            
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home;