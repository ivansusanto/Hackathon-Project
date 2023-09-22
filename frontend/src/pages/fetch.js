import axios from "axios";

export default function fetch(){
  const url = import.meta.env.VITE_API_URL
  
  const http = axios.create({
    baseURL:url,
    headers:{
        "Content-type":"application/json",
    }
  })

  return {http}
}