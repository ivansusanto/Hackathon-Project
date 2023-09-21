// import axios from 'axios';
// import { useState, useEffect } from 'react';

// function UserForm() {
//     const [data, setData] = useState<IData>(null);
//     const [group_count, setGroupCount] = useState<number>(1);
    
//     useEffect(() => {
//         const fetchKelompok = async () => {
//             try {
//                 const response = await axios.get(`http://${env("HOST")}:3000/api/kelompok/result`, {
//                     headers: {
//                         "x-api-key": env("API_KEY")
//                     }
//                 });

//                 setData(response.data);
//                 setGroupCount(response.data.length);
//             } catch (error) {
//                 console.error(error);
//             }
//         }

//         fetchKelompok();
//     }, []);

//     const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const response = await axios.put(`http://${env("HOST")}:3000/api/kelompok/shuffle`, {
//                 group_count: group_count
//             }, {
//                 headers: {
//                     "x-api-key": env("API_KEY")
//                 }
//             });

//             console.log(response.data.summary);
//             setData(response.data.groups);
//             setGroupCount(response.data.groups.length);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <Form onSubmit={submitHandler}>
//                 <Form.Group className="mb-3">
//                     <Form.Label>Masukkan jumlah kelompok</Form.Label>
//                     <Form.Control
//                         type="number"
//                         value={group_count}
//                         onChange={(e) => setGroupCount(isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value))}
//                     />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//             <ListGroup>
//                 <h2 className="mt-3">Kelompok FS 2023</h2>
//                 {data && data.map((kelompok) => (
//                     <ListGroupItem key={kelompok.kelompok} className="my-2 rounded-2 border-1 p-5">
//                         <h3 className="mb-3">Kelompok {kelompok.kelompok}</h3>
//                         <ListGroup>
//                             {kelompok.anggota.map((anggota) => (
//                                 <ListGroupItem key={anggota.noreg}>
//                                     {anggota.noreg} - {anggota.nama}
//                                 </ListGroupItem>
//                             ))}
//                         </ListGroup>
//                     </ListGroupItem>
//                 ))}
//             </ListGroup>
//         </>
//     );
// }

function UserForm() {
    return (
        <h2 className='text-red'>Hello Semuanya ini H2</h2>
    );
}

export default UserForm;