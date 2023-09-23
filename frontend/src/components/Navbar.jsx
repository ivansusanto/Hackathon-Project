import { useRef, useState } from "react";
import "./navstyle.css";
import logo from "/img/Logo-lebar.png"
import burger from "/img/burger.png"
import { Avatar } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'

function Navbar (){
  const [navClick, setNavClick] = useState(false);

  function navClickHandler(){
    setNavClick(!navClick)
  }

  function logoutHandler(){
    sessionStorage.clear()
    window.location.reload()
  }
  return(
    <>
      <div className="navbar flex justify-between p-5 w-full shadow-lg z-10">
        {/* <div className="navbar-wrapper overflow-y-hidden ">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <a href="/">
                <img className="hati-kanan" alt="Hati kanan" src="/img/Logo-lebar.png" />
              </a>
              <div className="text-wrapper">
                <a href="/">Beranda</a>
              </div>
              <div className="div">
                <a href="/acara">Acara</a>
              </div>
              <div className="text-wrapper-2">
                <a href="/wisata">Wisata</a>
              </div>
              <a href="/login">
                <div className="overlap btn btn-accent">
                  <div className="text-wrapper-3">Login</div>
                </div>
              </a>
            </div>
          </div>
        </div> */}
        <div className="left z-10">
          <a href="/">
            <img src={logo} alt="" style={{height: "80px"}}/>

          </a>
        </div>
        <div className="right hidden lg:block z-10">
          <ul className="flex align-middle text-xl">
            <li className="mt-2 me-16">
              <a href="/">
                Beranda

              </a>
            </li>
            <li className="mt-2 me-16">
              <a href="/acara">
                Acara

              </a>
            </li>
            <li className="mt-2 me-16">
              <a href="/wisata">
                Wisata

              </a>
            </li>
            <div className="login-register" style={{display: !sessionStorage.getItem("token") ? "block" : "none"}}>
              <ul className="flex">
                <li className=" me-4">
                  <a href="/login">
                    <button className="btn btn-success w-28 text-lg">Login</button>

                  </a>
                </li>
                <li>
                  <a href="/register">
                    <button className="btn btn-outline btn-primary w-28 text-lg">Register</button>

                  </a>
                </li>
              </ul>
            </div>
            <div className="profile hidden me-6 z-10" style={{display: sessionStorage.getItem("token") ? "block" : "none"}}>
              <Menu>
                <MenuButton as={Button}>
                  <Avatar
                  sx={{ bgcolor: deepOrange[500] }}
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                  >
                    {sessionStorage.getItem("display_name") ? sessionStorage.getItem("display_name")[0] : ""}
                  </Avatar>
                </MenuButton>
                <MenuList className=" bg-gray-100 rounded-xl p-4 w-48" >
                  <a href="">
                    <MenuItem className="btn bg-white mb-4">Profile</MenuItem>

                  </a>
                  <MenuItem className="btn btn-error" onClick={logoutHandler}>Logout</MenuItem>
                </MenuList>
              </Menu>
            
            </div>
          </ul>
        </div>
        <div className=" lg:hidden">
          <button className="btn btn-ghost" onClick={navClickHandler}>
            <img src={burger} alt="" style={{height: "50px"}} />
          </button>
        </div>
      </div>

      <div className="navMenu hidden z-0" style={{display: navClick ? "block" : "none"}}>
        <ul className="text-lg">
          <li className="">
            <a href="/">
              <button className="btn rounded-none w-full">Beranda</button>

            </a>
          </li>
          <li className="">
            <a href="/acara">
              <button className="btn rounded-none w-full">Acara</button>

            </a>
          </li>
          <li className="">
            <a href="/wisata">
              <button className="btn rounded-none w-full">Wisata</button>

            </a>
          </li>
          <li>
            <a href="/login">
              <button className="btn bg-green-600 rounded-none text-lg w-full shadow-xl">Login</button>

            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar