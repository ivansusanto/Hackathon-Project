import "./navstyle.css";

function Navbar (){

  return(
    <>
    <div className="navbar">
          <div className="navbar-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="div">Beranda</div>
                <div className="text-wrapper-2">Wisata</div>
                <div className="text-wrapper-3">Acara</div>
                <img className="hati-kanan" alt="Hati kanan" src="/img/Logo-lebar.png" />
                <div className="overlap">
                  <div className="text-wrapper-4">Sign in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar