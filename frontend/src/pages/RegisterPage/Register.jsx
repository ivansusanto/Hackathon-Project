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
  const [username, setUsername] = useState()
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [name, setName] = useState()
  const [filled, setFilled] = useState(false)
  const {http} = fetch()

  function emailHandler(e){
    setEmail(e.target.value)
  }
  
  function usernameHandler(e){
    setUsername(e.target.value)
  }

  function phoneHandler(e){
    setPhone(e.target.value)
  }

  function passwordHandler(e){
    setPassword(e.target.value)
  }

  function confirmPasswordHandler(e){
    setConfirmPassword(e.target.value)
  }
  
  function nameHandler(e){
    setName(e.target.value)
  }


  useEffect(()=>{
    checkFilled()
  }, [email,phone, password, confirmPassword, name])

  function checkFilled(){
    if(!email || !username || !phone || !password || !confirmPassword || !name){
      setFilled(false)
    }else{
      setFilled(true)
    }
    console.log(filled)
  }
  
  function submitHandler(e){
    if(!email || !username || !phone || !password || !confirmPassword || !name){
      alert("Ada field yang belum diisi")
    }else if(password != confirmPassword){
      alert("Password dan confirm password tidak sama")
    }
    else{
      const data = {
        email: email,
        username: username,
        password: password,
        conf_pass: confirmPassword,
        no_telp: phone,
        display_name: name,
        role: "2"
      }
      http.post("users/register", data).then((res) => {
        if(res.data.message != "User berhasil terdaftar"){
          alert("Terdapat data invalid")
        }else{
          alert("Berhasil mendaftar")
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
            <div className="border-solid border-2 rounded-lg py-12 px-28 bg-white" style={{height: "600px", width: "1000px"}}>
              <h1 className=" text-7xl font-bold flex justify-center">REGISTER</h1>
              <div className="mt-20 flex justify-between">
                <div className="flex">
                  <TextField 
                  id="outlined-basic1" 
                  label="Email" 
                  variant="outlined" 
                  sx={{width: "320px"}}
                  onChange={emailHandler}
                  />

                </div>
                <div className="flex">  
                  <TextField 
                  id="outlined-basic2" 
                  label="Username" 
                  variant="outlined" 
                  sx={{width: "320px"}}
                  onChange={usernameHandler}

                  />

                </div>
              </div>
              <div className="mt-5 flex justify-between">
                <div className="flex">
                  <TextField 
                  id="outlined-password-input1" 
                  label="Password" 
                  variant="outlined" 
                  sx={{width: "320px"}}
                  onChange={passwordHandler}
                  autoComplete="current-password"
                  type="password"
                  />

                </div>
                <div className="flex">  
                  <TextField 
                  id="outlined-password-input2" 
                  label="Confirm Password" 
                  variant="outlined" 
                  sx={{width: "320px"}}
                  onChange={confirmPasswordHandler}
                  autoComplete="current-password"
                  type="password"

                  />

                </div>
              </div>
              <div className="mt-5 flex justify-between">
                <div className="flex">
                  <TextField 
                  id="outlined-basic3" 
                  label="Nomor telepon" 
                  variant="outlined" 
                  sx={{width: "320px"}}
                  onChange={phoneHandler}

                  />
                  
                </div>
                <div className="flex">
                  <TextField 
                  id="outlined-basic4" 
                  label="Nama Pengguna" 
                  variant="outlined" 
                  sx={{width: "320px"}}
                  onChange={nameHandler}
                  />

                </div>
              </div>
                
              <div>
                <button className="btn btn-primary w-full mt-10 mb-1 text-xl font-bold" onClick={submitHandler} disabled={!filled}>Daftar</button>
              </div>
              Sudah pernah mendaftar? Silahkan <a href="/login" className=" text-primary"><u>masuk</u></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login