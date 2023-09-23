

export default function TopDest({img, title}){

  return(
    <>
      <div className="flex-none me-7" style={{height: "180px", width: "300px"}}>
        <img src={img} alt="" style={{height: "180px"}}/>
        <p className="-mt-8 ms-4">{title}</p>
      </div>
    </>
  )
}