import { useRef, useState } from "react";
import "./navstyle.css";
import logo from "/img/Logo-lebar.png"
import burger from "/img/burger.png"

function Navbar (){
  const [navClick, setNavClick] = useState(false);

  function navClickHandler(){
    setNavClick(!navClick)
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
        <div className="left">
          <a href="/">
            <img src={logo} alt="" style={{height: "80px"}}/>

          </a>
        </div>
        <div className="right hidden lg:block">
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
            <li>
              <button className="btn btn-accent w-28 text-lg">Login</button>
            </li>
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
            <button className="btn rounded-none btn-accent text-lg w-full shadow-xl">Login</button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar