function WisataCard({img, title, description}){

  return (
    <>
      <div className="w-96 h-[500px] border shadow-lg rounded-xl p-7 bg-white flex-none me-7">
        <img src={img } alt="" className="w-full h-2/5 rounded-xl" />
        <div className="relative h-3/5">
          <h1 mt-8>{title}</h1>
          <p className="mt-6">{description}</p>
          <div className="absolute btn bottom-10 w-28 shadow-md">More</div>
        </div>
      </div>
    </>
  )
}

export default WisataCard