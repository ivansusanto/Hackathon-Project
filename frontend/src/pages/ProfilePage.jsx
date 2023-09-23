import { TextField } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function ProfilePage(){
  

  return (
    <>
      <Navbar />
      <div className="w-full relative h-[900px] flex justify-center items-center">
        <div className="w-2/5 h-4/5 -mt-16">
          <h1 className="font-bold text-5xl mb-6 ms-6 text">Edit profile</h1>
          <div className="w-full h-full border shadow-2xl rounded-3xl px-16 pt-12">
            
            <div className="w-full flex">
              <div className="w-1/2 pe-5">
                <TextField id="outlined-basic1" label="Email" variant="outlined" className="w-full"/>
              </div>
              <div className="w-1/2 flex justify-end ps-5">
                <TextField id="outlined-basic2" label="Username" variant="outlined" className="w-full" />
              </div>
            </div>

            <div className="mt-7">
              <TextField id="outlined-basic2" label="Nama Pengguna" variant="outlined" className="w-full" />

            </div>
            <div className="mt-7">
              <TextField id="outlined-basic2" label="Nomor telepon" variant="outlined" className="w-full" />

            </div>

            

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}