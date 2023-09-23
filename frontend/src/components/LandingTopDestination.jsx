

export default function TopDest({img, title}){

  return(
    <>
      <div className="flex-none me-7 " style={{height: "200px", width: "300px"}}>
        <img src={img} alt="" className="rounded-lg shadow-lg" style={{height: "180px", width: "100%"}}/>
        <div className="-mt-8 ps-4 bg-black bg-opacity-70 rounded-b-lg relative h-8">
          <p className=" font-bold text-lg">{title}</p>

        </div>
      </div>
    </>
  )
}