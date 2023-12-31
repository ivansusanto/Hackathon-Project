import React, { useEffect, useState } from "react";
import fetch from "../pages/fetch";
import User from "../pages/User";

// Data Dummy Buat cek
const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      tlp:'081239238231',
      email: 'jane.cooper@example.com',
      image: 'https://bit.ly/33HnjK0',
      hehe:'halo'
    },
    {
      name: 'John Doe',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Tester',
      tlp:'081239238231',
      email: 'john.doe@example.com',
      image: 'https://bit.ly/3I9nL2D',
      hehe:'halo'
    },
    {
      name: 'Veronica Lodge',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: ' Software Engineer',
      tlp:'081239238231',
      email: 'veronica.lodge@example.com',
      image: 'https://bit.ly/3vaOTe1',
      hehe:'halo'
    },
];

function Table() {
    const [users, setUsers] = useState([])
    const { http } = fetch()
    
    useEffect(() => {
        http.get("users/fetch", {
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        }).then((res) => {
            setUsers(res.data.users)
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
                                            className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Username
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Phone
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users?users.map((person) => (
                                        <tr key={person.email}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{person.display_name}</div>
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm text-gray-500">{person.email}</div>
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{person.username}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
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
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {person.role}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {person.no_telp}
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
