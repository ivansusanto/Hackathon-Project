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

  const [amount, setAmount] = useState(1);
  

  return (
    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={wisata.foto} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={wisata.foto} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(wisata.foto)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <h1 className='text-3xl font-bold'>{wisata.name}</h1>
                </div>
                <p className='text-gray-700'>
                  {wisata.desc}
                </p>
                <h6 className='text-2xl font-semibold'>{wisata.harga}</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>
        </div>
    
  );
};
