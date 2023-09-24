import React, {useState, useEffect} from "react";
import fetch from "../pages/fetch"

function Table() {
    const [wisatas, setWisatas] = useState([])
    const { http } = fetch()

    useEffect(() => {
        http.get("wisata",
        ).then((res) => {
            console.log(res.data.data);
            setWisatas(res.data.data)
        })
    }, [])
    
    return (
        <>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Alamat
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Harga
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Deskripsi
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Jenis
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Foto
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    {wisatas?wisatas.map(person => (
                                        <tr key={person.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{person.alamat}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {"Rp "+ (person.price).toLocaleString('id-ID')}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {person.desc}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {(person.jenis == 0)? "Wisata":"UMKM" }
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <img className="h-10 w-10 rounded-full" src={person.foto} alt="Foto" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    )):""}
                                </tbody>


                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;
