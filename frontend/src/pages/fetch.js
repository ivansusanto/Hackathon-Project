import axios from "axios";

export default function fetch(){
  const url = import.meta.env.VITE_API_URL
  
  const http = axios.create({
    baseURL:url,
    headers:{
      "Content-type":"application/json",
    }
  })

  const http_file = axios.create({
    baseURL:url,
    headers:{
      "Content-type":"multipart/form-data",
    }
  })

  return {http, http_file}
}