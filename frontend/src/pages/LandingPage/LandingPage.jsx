import Nav from "../../components/Navbar.jsx"
import Foot from "../../components/Footer.jsx"
import jumbo from "/img/image 3.png"
import rectangle from "/img/Rectangle 20.png"
import arrow from "/img/Arrow 1.png"
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import React, { useEffect, useState } from "react";
import "./style.css";
import TopDest from "../../components/LandingTopDestination.jsx"
import Bundle from "../../components/Bundle.jsx"
import fetch from "../fetch.js"


function LandingPage(){
  const {http} = fetch()
  const [tops, setTops] = useState([])
  const [bundles, setBundles] = useState([])

  useEffect(() => {
    http.get("wisata").then((res) => {
      setTops(res.data.data)
    })
    http.get("bundle").then((res) => {
      setBundles(res.data.data)
    })
  }, [])

  return(
    <>
    <Nav/>
    <img src={jumbo} alt="" className="absolute w-screen"/>
    <div className="jumbotron text-white z-10 relative h-96 md:h-fit" >
      <div className=" 3xl:mt-80 2xl:mt-40 xl:mt-28 xl:ms-24 lg:mt-52 lg:ms-16 md:mt-32 md:ms-12 mt-16 ms-8 bg-black w-1/2 p-5 rounded-2xl bg-opacity-50">
        <h1 className=" xl:text-6xl lg:text-4xl md:text-2xl font-bold">
          WELCOME TO <br />
          SUMBERGAYAM
        </h1>
        <p className=" mt-3">
        Terselubung di lereng pegunungan Jawa Timur, Sumbergayam mengundang Anda untuk merasakan keindahan alamnya yang memukau dan mengeksplorasi kekayaan budaya lokalnya. Dari petualangan alam hingga kuliner lezat dan seni tradisional yang memesona, Sumbergayam menawarkan pengalaman beragam yang tak terlupakan. Temukan pesona Jawa Timur di desa yang tersembunyi ini.
        </p>
        <button className="btn bg-white-500 mt-10 text-xl">
          More Info
        </button>

      </div>
    </div>
    
    <div className="relative w-full -mt-24 2xl:mt-52 xl:mt-24">
      <div className="absolute text-white right-40">
        <h1 className=" text-4xl font-bold">Top Vacation destination</h1>
        <div className=" no-scrollbar flex overflow-x-auto mt-4" style={{width: "800px"}}>
          {
            tops.map((top, idx) => {
              return <TopDest img={top.foto} title={top.name} key={idx}></TopDest>
            })
          }
          {
            tops.map((top, idx) => {
              return <TopDest img={top.foto} title={top.name} key={idx}></TopDest>
            })
          }

        </div>
      </div>
    </div>
    <div className=" bg-white md:pt-64 lg:pt-72 xl:pt-80 2xl:pt-96 pb-8">
      <div className="px-24">
        <h1 className="font-bold text-3xl 2xl:-mt-16">Offers</h1>
        <div className=" no-scrollbar flex h-56 overflow-x-auto">
          {
            bundles.map((bundle, idx)=>{
              return <Bundle id={bundle.id} img1={bundle.Bundle_Items[0].Wisatum.foto} img2={bundle.Bundle_Items[1].Wisatum.foto} title={bundle.name} price={bundle.price} priceBefore={bundle.normal_price} key={idx} ></Bundle>
            })
          }
          {
            bundles.map((bundle, idx)=>{
              return <Bundle id={bundle.id} img1={bundle.Bundle_Items[0].Wisatum.foto} img2={bundle.Bundle_Items[1].Wisatum.foto} title={bundle.name} price={bundle.price} priceBefore={bundle.normal_price} key={idx} ></Bundle>
            })
          }

        </div>

        <div className="mt-8">
          <h1 className="font-bold text-3xl">Lokasi</h1>
          <iframe className="w-full h-96 shadow-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7899.852541889274!2d111.8131201954758!3d-8.108990017680354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e791db7cd7ea675%3A0xba23deee6d4c53e1!2sSumbergayam%2C%20Kec.%20Durenan%2C%20Kabupaten%20Trenggalek%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1695407435441!5m2!1sid!2sid" ></iframe>
        </div>
      </div>
    </div>


      <Foot/>
    </>
  )
}

export default LandingPage