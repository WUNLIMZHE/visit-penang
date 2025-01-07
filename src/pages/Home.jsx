import React from "react"
import Navbar from "../Component/Navbar/Navbar"
import Brochure from '../Component/Brochure/Brochure'
import Program from '../Component/Program/Program'
import Title from '../Component/Title/Title'
import About from '../Component/About/About'
import Gallery from '../Component/Gallery/Gallery'
export default function Home (){
    return(    
        <>
            <Navbar/>
            <Brochure/>
            <div className='container'>
            <Title subTitle='What we have' title='Penang is not just a place to visit, it is a living experience, a feast for the senses, and a celebration of coexistence, where every step tells a story.'/>
            <Program/>
            <About/>
            <Title subTitle='Gallery' title='More about Penang'/>
            </div>
            <Gallery></Gallery>
        </>
    );
}