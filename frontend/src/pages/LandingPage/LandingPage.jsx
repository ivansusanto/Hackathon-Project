import Nav from "../../components/Navbar"
import jumbo from "/img/image 3.png"

function LandingPage(){

  return(
    <>
      <Nav />
      <div className="jumbotron">
        <img src={jumbo} alt="" />
      </div>

      <div>

      </div>
    </>
  )
}

export default LandingPage