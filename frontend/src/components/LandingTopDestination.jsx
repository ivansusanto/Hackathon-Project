

export default function TopDest({img, title}){

  return(
    <>
      <div className="flex-none me-7 " style={{height: "200px", width: "300px"}}>
        <img src={img} alt="" className="rounded-lg shadow-lg" style={{height: "180px"}}/>
        <p className="-mt-10 ms-4">{title}</p>
      </div>
    </>
  )
}