import Navbar from "../../components/SideNav"
import Table from "../../components/Table"

function MasterUserPage(){
    return (
        <>
        <div className="flex h-screen">
            <div className="h-screen">
                <Navbar/>
            </div>

            <div>
                <Table/>
            </div>
        </div>
        </>
    )
}

export default MasterUserPage