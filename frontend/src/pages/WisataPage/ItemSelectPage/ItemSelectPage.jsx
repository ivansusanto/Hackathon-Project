import React from "react";
import { useParams } from "react-router";
import fetch from "../../fetch.js"
import { useEffect, useState } from "react";

export const ItemSelectPage = () => {
  const params = useParams();

  const {http} = fetch()
  const [wisata, setWisata] = useState([])

  useEffect(() => {
    http.get(`/wisata/${params.id}`).then((res) => {
      console.log(res);
      setWisata(res.data.data)
    })
  }, [])
  

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1920px] h-[954px] relative">

        {/* Item yang dipilih */}
        <img className="absolute w-[400px] h-[400px] top-[95px] left-[144px] object-cover" alt="Item" src={wisata.foto} />

        <div className="absolute w-[672px] top-[94px] left-[708px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
          {wisata.name}
        </div>
        <div className="absolute w-[668px] top-[195px] left-[712px] [font-family:'Montserrat-Light',Helvetica] font-light text-black text-[40px] tracking-[0] leading-[normal]">
          Deskripsi : <br></br> 
          {wisata.desc}
        </div>

        {/* Button */}
        <img
          className="absolute w-[321px] h-[93px] top-[73px] left-[1489px] object-cover"
          alt="Button booking"
          src="button-booking.png"
        />

        {/* MAP */}
        <img className="absolute w-[1236px] h-[292px] top-[596px] left-[144px] object-cover" alt="Map" src="map.png" />

        
      </div>
    </div>
  );
};
