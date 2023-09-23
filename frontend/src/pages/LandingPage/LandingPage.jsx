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
    {/* <div className="home-page">
      <div className="div">
        <div className="overlap">
          <div className="jumbotron">
            <div className="overlap-group">
              <div className="WELCOME-TO">
                WELCOME TO <br />
                SUMBERGAYAM
              </div>
              <p className="lorem-ipsum-atau">
                Lorem ipsum, atau ringkasnya lipsum, adalah
                <br />
                teks standar yang ditempatkan untuk mendemostrasikan
                <br />
                elemen grafis atau presentasi visual seperti font, tipografi, <br />
                dan tata letak.
              </p>
              <div className="div-wrapper btn p-0">
                <div className="text-wrapper">More Info</div>
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="bali-indonasia-wrapper">
              <div className="text-wrapper-2">lorem, lorem</div>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-2">lorem, lorem</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-2">lorem, lorem</div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-2">Lorem, lorem</div>
            </div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-3">Top Vacation Destinations</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7899.852541889274!2d111.8131201954758!3d-8.108990017680354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e791db7cd7ea675%3A0xba23deee6d4c53e1!2sSumbergayam%2C%20Kec.%20Durenan%2C%20Kabupaten%20Trenggalek%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1695407435441!5m2!1sid!2sid" ></iframe>
          </div>
        </div>
        <div className="frame-6">
          <div className="frame-7">
            <div className="text-wrapper-4">Offers</div>
          </div>
          <div className="frame-8">
            <div className="frame-wrapper">
              <div className="frame-9">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <img className="bytesize-heart" alt="Bytesize heart" src="/img/bytesize-heart-2.svg" />
                    <img className="image" alt="Image" src="/img/image-18.png" />
                  </div>
                </div>
                <div className="frame-10">
                  <div className="frame-10">
                    <div className="frame-11">
                      <div className="text-wrapper-5">Domestic Flights</div>
                      <div className="frame-12">
                        <div className="frame-13">
                          <p className="text-wrapper-6">Huge savings on flight with trxvl.</p>
                        </div>
                      </div>
                    </div>
                    <div className="frame-12">
                      <p className="text-wrapper-7">Book domestic flights starting @ just ₹1459</p>
                    </div>
                  </div>
                  <div className="frame-14">
                    <div className="frame-15">
                      <div className="text-wrapper-8">Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-16">
              <div className="frame-9">
                <div className="frame-17">
                  <div className="overlap-group-3">
                    <img className="img" alt="Bytesize heart" src="/img/bytesize-heart-1.svg" />
                    <img className="image-2" alt="Image" src="/img/image-19-1.png" />
                  </div>
                </div>
                <div className="frame-10">
                  <div className="frame-10">
                    <div className="frame-11">
                      <div className="text-wrapper-5">International Hotels</div>
                      <div className="frame-12">
                        <div className="frame-13">
                          <p className="text-wrapper-6">Enjoy upto 20% off on International Hotels</p>
                        </div>
                      </div>
                    </div>
                    <div className="frame-12">
                      <p className="text-wrapper-7">
                        Make the most of&nbsp;&nbsp;this deal on your first booking with trxvl.
                      </p>
                    </div>
                  </div>
                  <div className="frame-14">
                    <div className="frame-15">
                      <div className="text-wrapper-8">Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-18">
              <div className="frame-9">
                <div className="frame-19">
                  <div className="overlap-group-3">
                    <img className="img" alt="Bytesize heart" src="/img/bytesize-heart.png" />
                    <img className="image-2" alt="Image" src="/img/image-19.png" />
                  </div>
                </div>
                <div className="frame-10">
                  <div className="frame-10">
                    <div className="frame-11">
                      <div className="text-wrapper-5">Bank Offer</div>
                      <div className="frame-12">
                        <div className="frame-13">
                          <p className="text-wrapper-6">Get upto 30% instant discount</p>
                        </div>
                      </div>
                    </div>
                    <div className="frame-12">
                      <p className="text-wrapper-7">
                        Get discount on flights, hotels and holiday packages with HDFC bank credit card.
                      </p>
                    </div>
                  </div>
                  <div className="frame-14">
                    <div className="frame-15">
                      <div className="text-wrapper-8">Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}


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
      <div className="ms-24">
        <h1 className="font-bold text-3xl 2xl:-mt-16">Offers</h1>
        <div className=" no-scrollbar flex h-56 overflow-x-auto">
          <Bundle img={jumbo} title={"test"} price={50000} priceBefore={40000}></Bundle>
          <Bundle img={jumbo} title={"test"} price={50000} priceBefore={40000}></Bundle>
          <Bundle img={jumbo} title={"test"} price={50000} priceBefore={40000}></Bundle>
          <Bundle img={jumbo} title={"test"} price={50000} priceBefore={40000}></Bundle>
          <Bundle img={jumbo} title={"test"} price={50000} priceBefore={40000}></Bundle>

        </div>

      </div>
    </div>

      <Foot/>
    </>
  )
}

export default LandingPage