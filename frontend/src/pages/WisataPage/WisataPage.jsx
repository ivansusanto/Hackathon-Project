import React from "react";
import Nav from "../../components/Navbar.jsx"
import Foot from "../../components/Footer.jsx"



function WisataPage () {
  return (
    <>
    <Nav/>
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1920px] h-[954px]">
        <div className="relative h-[741px] bg-[url('/img/image-37.png')] bg-cover bg-[50%_50%]">
        {/* <div className="relative h-[741px] bg-[url(https://c.animaapp.com/YpKcOcyw/img/image-37.png)] bg-cover bg-[50%_50%]"> */}
          <div className="absolute top-[132px] left-[154px] [text-shadow:18px_20px_14px_#00000080] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[79px] tracking-[0] leading-[normal]">
            WISATA
            <br />
            SUMBERGAYAM
          </div>
        </div>
      </div>
    </div>
    <Foot/>
    </>
  );
};

export default WisataPage