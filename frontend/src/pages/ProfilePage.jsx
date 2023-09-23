import { TextField } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import fetch from "./fetch";
import { Input } from "@chakra-ui/input";


export default function ProfilePage(){
  if(!sessionStorage.getItem("token")) window.location.replace("/")

  const {http} = fetch()
  const [user, setUser] = useState({})
  const [name, setName] = useState()
  const [phone, setPhone] = useState()

  useEffect(() => {
    http.get("users", {
      headers:{
        'Accept': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem("token")
      }
    }).then((res) => {
      setUser(res.data.user)
      setName(res.data.user.display_name)
      setPhone(res.data.user.no_telp)
    })
  }, [])
  
  function nameHandler(e){
    console.log(e.target.value)
    setName(e.target.value)
  }

  function phoneHandler(e){
    setPhone(e.target.value)
  }

  function simpanHandler(){
    let data = {
      display_name: name,
      no_telp: phone
    }
    console.log(data)
    http.put("users/update", data, {
      headers:{
        Authorization: 'Bearer ' + sessionStorage.getItem("token")
      }
    }).then((res) => {
     console.log(res)
    })
  }

  return (
    <>
      <Navbar />
      <div className="w-full relative h-[704px] flex justify-center items-center">
        <div className="w-2/5 h-2/3 -mt-16">
          <h1 className="font-bold text-5xl mb-6 ms-6 text">Edit profile</h1>
          <div className="w-full h-full border shadow-2xl rounded-3xl px-16 pt-12">
            
            <div className="w-full flex">
              <div className="w-1/2 pe-5">
                Email
              < Input placeholder='Email' className="border rounded-md p-3 w-full" disabled={true} value={user.email || ""}/>
                
              </div>
              <div className="w-1/2 ps-5">
                <div>
                  Username
                </div>
                <div>
                  <Input placeholder='Email' className="border rounded-md p-3 w-full" disabled={true} value={user.email || ""}/>

                </div>
              </div>
            </div>

            <div className="mt-7">
              Nama pengguna
            <Input placeholder='Nama pengguna' className="border rounded-md p-3 w-full" value={name} onChange={nameHandler}/>

            </div>
            <div className="mt-7">
              Nomor Telepon
            <Input placeholder='Nomor telepon' className="border rounded-md p-3 w-full" value={phone} onChange={phoneHandler}/>

            </div>

            <button className="btn btn-neutral w-full mt-7" onClick={simpanHandler}>Simpan</button>

            

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}