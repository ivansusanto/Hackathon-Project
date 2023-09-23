import { useParams } from "react-router"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useEffect, useState } from "react"
import fetch from "../fetch"
import WisataCard from "../../components/WisataCard"

export default function BundlePage(){
  const {id} = useParams()
  const {http} = fetch()
  const [bundle, setBundle] = useState()

  useEffect(() => {
    http.get(`bundle/${id}`).then((res) => {
      console.log(res.data.data[0])
      setBundle(res.data.data[0])
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className="w-full relative h-[1000px] flex justify-center items-center">
        <div className="w-4/5 h-5/6 -mt-16">
          <h1 className="font-bold text-5xl mb-6 text-center">{bundle?bundle.name:""}</h1>
          <div className="flex justify-evenly">
            <div className="">
              {
                bundle?<WisataCard id={bundle.Bundle_Items[0].Wisatum.id} img={bundle.Bundle_Items[0].Wisatum.foto} title={bundle.Bundle_Items[0].Wisatum.name} description={bundle.Bundle_Items[0].Wisatum.desc}/>:""
              }
              <p className="font-bold text-4xl text-center mt-5">Rp {bundle?bundle.Bundle_Items[0].Wisatum.price.toLocaleString('id-ID'):""}</p>
            </div>
            <div className="font-bold text-9xl items-center flex ">+</div>
            <div className="">
              {
                bundle?<WisataCard id={bundle.Bundle_Items[1].Wisatum.id} img={bundle.Bundle_Items[1].Wisatum.foto} title={bundle.Bundle_Items[1].Wisatum.name} description={bundle.Bundle_Items[1].Wisatum.desc}/>:""
              }
              <p className="font-bold text-4xl text-center mt-5">Rp {bundle?bundle.Bundle_Items[1].Wisatum.price.toLocaleString('id-ID'):""}</p>
            </div>
          </div>
          <div className="w-full flex justify-center pt-10">
            <div className="w-[620px] h-[500] border shadow-xl rounded-xl p-7">
              <h1 className=" text-3xl text-center">Hanya dengan bayar total <b>Rp {bundle?bundle.price.toLocaleString("id-ID"):""}</b> anda dapat menikmati semuanya!</h1>
              <button className="btn btn-primary mt-4 text-4xl font-bold w-full shadow-lg text-white">Bayar sekarang!</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}