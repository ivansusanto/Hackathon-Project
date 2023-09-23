

export default function Bundle({img1, img2, title, price, priceBefore}){

  return (
    <>
      <div className="flex-none h-52 p-4 shadow-lg bg-white me-7 rounded-lg border" style={{width: "500px"}}>
        <div className="flex h-full">
          <div className="w-1/2 flex">
            <img src={img1} alt="" className="w-1/2 rounded-l-xl" />
            <img src={img2} alt="" className="w-1/2 rounded-r-xl" />

          </div>
          <div className="w-1/2 ps-3 relative">
            <div className="relative w-full h-full">
              <h1 className="font-bold text-lg">{title}</h1>
              <p>Harga sebelum bundle</p>
              <strike>Rp {priceBefore.toLocaleString('id-ID')}</strike>
              
              <div className="absolute bottom-0 w-full">

                <p className="text-center text-xl">Harga setelah bundle</p>
                <button className="btn btn-primary w-full text-xl text-white">Rp {price.toLocaleString('id-ID')}</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}