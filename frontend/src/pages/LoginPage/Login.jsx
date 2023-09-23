import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import background from "/img/image 3.png"
import Navbar from "../../components/Navbar";
import TextField from '@mui/material/TextField';
import passwordIcon from "/img/mdi-password.svg"
import userIcon from "/img/mdi-user-outline.svg"
import fetch from "../fetch";

function Login (){
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [filled, setFilled] = useState(false)
  const {http} = fetch()

  function emailHandler(e){
    setEmail(e.target.value)
  }

  function passwordHandler(e){
    setPassword(e.target.value)
  }

  useEffect(()=>{
    checkFilled()
  }, [email,password])

  function checkFilled(){
    if(!email || !password){
      setFilled(false)
    }else{
      setFilled(true)
    }
  }
  
  function submitHandler(e){
    if(!email || !password){
      alert("Email atau password belum diisi")
    }else{
      const data = {
        username: email,
        password: password
      }
      http.post("users/login", data).then((res) => {
        if(res.message != "berhasil login"){
          alert("Username atau password salah")
        }else{
          sessionStorage.setItem("token", res.message.token)
        }
      })
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <div className=" h-screen overflow-hidden relative">
    <img src={background} alt="" className="absolute z-0" />
        <div className="relative flex z-10 justify-center">
          <div className=" flex items-center justify-center h-screen">
            <div className="border-solid border-2 rounded-lg py-12 px-28 bg-white" style={{height: "500px", width: "1000px"}}>
              <h1 className=" text-7xl font-bold flex justify-center">LOGIN</h1>
              <div className="mt-20 flex justify-between">
                <div className="flex">
                  <img src={userIcon} alt="" />
                  <TextField 
                  id="outlined-basic1" 
                  label="Username" 
                  variant="outlined" 
                  sx={{width: "320px"}}
                  onChange={emailHandler}
                  />

                </div>
                <div className="flex">
                  <img src={passwordIcon} alt="" />
                  <TextField 
                  id="outlined-basic2" 
                  label="Password" 
                  variant="outlined" 
                  sx={{width: "320px"}}
                  onChange={passwordHandler}
                  autoComplete="current-password"
                  type="password"
                  />

                </div>
              </div>
              <div>
                <button className="btn btn-primary w-full mt-10 mb-1 text-xl font-bold" onClick={submitHandler} disabled={!filled}>Masuk</button>
              </div>
              Belum pernah mendaftar? Silahkan <a href="/register" className=" text-primary"><u>daftar</u></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login