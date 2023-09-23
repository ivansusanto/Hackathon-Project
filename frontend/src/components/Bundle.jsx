

export default function Bundle({img, title, price, priceBefore}){

  return (
    <>
      <div className="flex-none h-52 p-4 shadow-lg bg-white me-7 rounded-lg" style={{width: "500px"}}>
        <div className="flex h-full">
          <img src={img} alt="" className="w-1/2 rounded-xl" />
          <div className="w-1/2 ps-3 relative">
            <div className="relative w-full h-full">
              <h1 className="font-bold text-lg">{title}</h1>
              <p>Harga sebelum bundle</p>
              <p>Rp. {priceBefore}</p>
              
              <div className="absolute bottom-0 w-full">

                <p>Harga setelah bundle</p>
                <button className="btn btn-primary w-full ">Rp. {price}</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}