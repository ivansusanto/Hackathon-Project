import "./navstyle.css";

function Navbar (){

  return(
    <>
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper">Beranda</div>
            <div className="div">Acara</div>
            <div className="text-wrapper-2">Wisata</div>
            <img className="hati-kanan" alt="Hati kanan" src="/img/Logo-lebar.png" />
            <div className="overlap">
              <div className="text-wrapper-3">Sign in</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar