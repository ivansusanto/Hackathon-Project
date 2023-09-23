import Navbar from "../../components/SideNavAdmin"
import Table from "../../components/TableMasterEvent"
import { useState, useEffect } from "react";
import fetch from "../fetch";

function MasterUserPage(){
    // const [setUser, user] = useState(null)
    // const {http} = fetch()

    // useEffect(()=>{
    //     http.get("users").then((res) => {
    //         console.log(res)
    //       })
    // }, [])

    return (
        <>
        <div className="flex h-screen">
            <div className="h-screen">
                <Navbar/>
            </div>

            <div>
                {/* {user} */}
                <Table/>
            </div>
        </div>
        </>
    )
}

export default MasterUserPage