import Nav from "../../components/Navbar"
import jumbo from "/img/image 3.png"
import rectangle from "/img/Rectangle 20.png"
import arrow from "/img/Arrow 1.png"
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function LandingPage(){

  return(
    <>
      <div style={{height: "4000px"}}>
        <Nav />
        <ParallaxProvider>
          <Parallax translateY={["-100px", "10px"]}>
            <img src={jumbo} alt="" className="absolute z-0 w-screen"/>
          </Parallax>
        </ParallaxProvider>
        <div className="relative jumbotron z-10">
          <div className="text-white ms-32 mt-96 font-Montserrat">
            <h1 className=" font-bold text-6xl">WELCOME TO<br />SUMBERGAYAM</h1>
            <p className=" w-1/2 mt-4 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit atque necessitatibus ut debitis vel id quis quae cupiditate. Quia dolorem iusto vitae architecto modi aliquid inventore pariatur sapiente deserunt.</p>
            <button class="btn btn-success mt-12 px-7 text-lg">More Info</button>
          </div>
          <div className="flex justify-center mt-10">
            <button className="btn w-20 h-20 border rounded-full">
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>

        <ParallaxProvider>
          <Parallax translateY={["380px", "10px"]}>
            <div className=" bg-slate-500 h-96">
              
            </div>
          </Parallax>
        </ParallaxProvider>

      </div>
    </>
  )
}

export default LandingPage