import Nav from "../../components/Navbar.jsx"
import Foot from "../../components/Footer.jsx"
import jumbo from "/img/image 3.png"
import rectangle from "/img/Rectangle 20.png"
import arrow from "/img/Arrow 1.png"
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import React from "react";
import "./style.css";
import TopDest from "../../components/LandingTopDestination.jsx"
import Bundle from "../../components/Bundle.jsx"


function LandingPage(){

  return(
    <>
    <Nav/>
    <img src={jumbo} alt="" className="absolute z-0"/>
    <div className="jumbotron text-white z-10 relative h-96 md:h-fit" >
      <div className=" 2xl:mt-96 xl:mt-64 xl:ms-24 lg:mt-52 lg:ms-16 md:mt-32 md:ms-12 mt-16 ms-8">
        <h1 className=" xl:text-6xl lg:text-4xl md:text-2xl font-bold">
          WELCOME TO <br />
          SUMBERGAYAM
        </h1>
        <p className=" w-1/2 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam necessitatibus corporis sequi dolorem dicta eligendi, ipsum nisi quia labore illum pariatur aliquid, magni aut quas. Ea quaerat ipsum laborum molestias!
        </p>
        <button className="btn bg-green-600 btn-outline mt-10 text-xl">
          More Info
        </button>

      </div>
    </div>
    
    <div className="relative w-full mt-4 lg:mt-16 2xl:mt-20">
      <div className="absolute text-white right-0">
        <h1 className=" text-4xl font-bold">Top Vacation destination</h1>
        <div className=" no-scrollbar flex overflow-x-auto mt-4" style={{width: "800px"}}>
          <TopDest img={jumbo} title={"asd"}></TopDest>
          <TopDest img={jumbo} title={"asd"}></TopDest>
          <TopDest img={jumbo} title={"asd"}></TopDest>
          <TopDest img={jumbo} title={"asd"}></TopDest>
          <TopDest img={jumbo} title={"asd"}></TopDest>
          <TopDest img={jumbo} title={"asd"}></TopDest>

        </div>
      </div>
    </div>
    <div className=" bg-white md:pt-64 lg:pt-72 xl:pt-80 2xl:pt-96 pb-8">
      <div className="px-24">
        <h1 className="font-bold text-3xl 2xl:-mt-16">Offers</h1>
        <div className=" no-scrollbar flex h-56 overflow-x-auto">
          <Bundle img={jumbo} title={"test"} price={50000} priceBefore={40000}></Bundle>
          <Bundle img={jumbo} title={"test"} price={50000} priceBefore={40000}></Bundle>
          <Bundle img={jumbo} title={"test"} price={50000} priceBefore={40000}></Bundle>
          <Bundle img={jumbo} title={"test"} price={50000} priceBefore={40000}></Bundle>
          <Bundle img={jumbo} title={"test"} price={50000} priceBefore={40000}></Bundle>

        </div>

        <div className="mt-8">
          <h1 className="font-bold text-3xl">Lokasi</h1>
          <iframe className="w-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7899.852541889274!2d111.8131201954758!3d-8.108990017680354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e791db7cd7ea675%3A0xba23deee6d4c53e1!2sSumbergayam%2C%20Kec.%20Durenan%2C%20Kabupaten%20Trenggalek%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1695407435441!5m2!1sid!2sid" ></iframe>
        </div>
      </div>

    </div>


      <Foot/>
    </>
  )
}

export default LandingPage