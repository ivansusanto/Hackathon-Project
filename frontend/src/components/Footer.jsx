// import "./footstyle.css";
import logo from "/img/Logo-kecil.png"


function Footer (){

  return(
    <>
      {/* <div className="footer bg-gray-300 h-72">
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
        <div className="div">
        </div>
      </div> */}
      <div className="bg-gray-300 h-52 w-full p-12">
        <div className="flex justify-between">
          <div className=" w-2/6">
            <img src={logo} alt="" style={{height: "170px"}} />
          </div>
          <div className=" w-4/6 flex justify-between">
            <div className=" w-1/2 text-lg">
              <ul>
                <li className="mb-2"><a href="/">Beranda</a></li>
                <li className="mb-2"><a href="/acara">Acara</a></li>
                <li className="mb-2"><a href="/wisata">Wisata</a></li>
              </ul>
            </div>
            <div className=" w-1/2">
              <ul>
                <li><a><b>Contact Person</b></a></li>
                <li><a href="https://wa.me/6289626794744">089626794744</a></li>
                <li><a><b>Alamat</b></a></li>
                <li><a>Desa Sumbergayam - Durenan<br />Trenggalek - Jawa Timur</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-gray-300 text-center font-bold">
        <div className="col-md-12 text-center">
          <p>
            Copyright &copy; 2023 All rights reserved
          </p>
          <p>KIM MATAHATI</p>
        </div>
      </div>
    </>
  )
}

export default Footer