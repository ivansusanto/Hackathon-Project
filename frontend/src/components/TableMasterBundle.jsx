import React, {useState, useEffect} from "react";
import fetch from "../pages/fetch"

function Table() {
    const [bundles, setBundles] = useState([])
    const { http } = fetch()

    useEffect(() => {
        http.get("bundle",
        ).then((res) => {
            console.log(res.data.data);
            setBundles(res.data.data)
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
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    {bundles?bundles.map(person => (
                                        <tr key={person.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {"Rp "+ (person.price).toLocaleString('id-ID')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {person.status?
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5
                                                        font-semibold rounded-full bg-green-100 text-green-800"
                                                    >
                                                        Active
                                                    </span>
                                                    :
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5
                                                        font-semibold rounded-full bg-red-100 text-green-800"
                                                    >
                                                        Inactive
                                                    </span>
                                                
                                                }
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
