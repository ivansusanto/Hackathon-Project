import "./footstyle.css";


function Footer (){

  return(
    <>
      <div className="footer w-screen">
        <div className="div">
          <div className="links">
            <div className="column">
              <div className="seslendirme-ve-alt">Beranda</div>
              <div className="text-wrapper">Tour</div>
              <div className="text-wrapper">Festival</div>
              <div className="text-wrapper">UMKM</div>
            </div>
            <div className="column ms-64">
              <div className="seslendirme-ve-alt"><b>Contact Person</b></div>
              <div className="text-wrapper">0935439057493284</div>
              <div className="text-wrapper"><b>Alamat</b></div>
              <div className="text-wrapper">Jalan jalan</div>
            </div>
          </div>
          <div className="text-wrapper-2">© 2023 wisatasumbergayam, Inc.</div>
          <img className="logo-kecil" alt="Logo kecil" src="/img/Logo-kecil.png" />
        </div>
      </div>
    </>
  )
}

export default Footer