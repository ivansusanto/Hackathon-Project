import "./navstyle.css";

function Navbar (){

  return(
    <>
<<<<<<< Updated upstream
    <div className="navbar">
          <div className="navbar-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <a href="/">
                    <div className="div">Beranda</div>
                </a>
                <div className="text-wrapper-2">Wisata</div>
                <div className="text-wrapper-3">Acara</div>
                <a href="/">
                    <img className="hati-kanan" alt="Hati kanan" src="/img/Logo-lebar.png" />
                </a>
                <a href="/login">
                    <div className="overlap">
                        <div className="text-wrapper-4">Sign in</div>
                    </div>
                </a>
              </div>
=======
    <div className="navbar ">
      <div className="navbar-wrapper overflow-y-hidden ">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <a href="/">
              <img className="hati-kanan" alt="Hati kanan" src="/img/Logo-lebar.png" />
            </a>
            <div className="text-wrapper">
              <a href="/">Beranda</a>
>>>>>>> Stashed changes
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
    </>
  )
}

export default Navbar