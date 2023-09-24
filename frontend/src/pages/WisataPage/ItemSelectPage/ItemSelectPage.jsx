import React from "react";
import Nav from "../../../components/Navbar.jsx"
import { useParams } from "react-router";
import fetch from "../../fetch.js"
import { useEffect, useState } from "react";

export const ItemSelectPage = () => {
  const params = useParams();

  const {http} = fetch()
  const [wisata, setWisata] = useState([])
  const [transaction, setTransaction] = useState()

  useEffect(() => {
    http.get(`/wisata/${params.id}`).then((res) => {
      console.log(res);
      setWisata(res.data.data)
    })

    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';  
    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;

  }, [])

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  function startTimeHandler(e) {
    setStartTime(e.target.value)
  }
  function endTimeHandler(e) {
    setEndTime(e.target.value)
  }

  function submitHandler(e) {
    const data = {
      wisata_id: params.id,
      start_date: startTime,
      end_date: endTime,
    }
    http.post('transaction', data, {headers:{ Authorization: `Bearer ${sessionStorage.getItem('token')}`}}).then((res) => {
      console.log(res.data);
      setTransaction(res.data)
      window.snap.pay(res.data.token)
    })
  }


  return (
    <div className="">
      <Nav />    
      <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
        <div className='flex flex-col gap-6 lg:w-2/4 mt-3'>
            <img src={wisata.foto} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
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
            <div className='items-center gap-12'>
                <div className='items-center leading-6'>
                  Start time : <input type="datetime-local" onChange={startTimeHandler}/> <br /><br />
                  End time : <input type="datetime-local" onChange={endTimeHandler}/> <br /><br /><br />
                </div>
                <button className='bg-violet-800 text-white btn font-semibold py-3 px-16 rounded-xl h-full' onClick={submitHandler}>Booking</button>
            </div>
        </div>
    </div>
  </div>
  );
};
