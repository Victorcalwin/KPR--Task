import React, { useState } from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



function DataFetch() {
    const [name, setName] = useState([]);
    // const [username, setUserName] = useState([]);
    // const [email, setEmail] = useState([]);
    // const [phone, setPhone] = useState([]);
    // const [website, setWebsite] = useState([]);
    // const [counter, setCounter] = useState(1);



    const getData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res.data)

                setName(res.data)


            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div>
            <h1>Welcome to KPR Info tech</h1>
            <Button variant="danger" onClick={() => getData()} className='mb-5 mt-5'>Get Data</Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>website</th>
                        <th>Address</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        name.map((e, i) => {
                            return <tr key={i}>
                                <td>{i}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                                <td>{e.website}</td>
                                <td>{e.address.city}</td>
                                <td>{e.company.name}</td>
                            </tr>
                        })}
                </tbody>
            </Table>
        </div >
    )
}

export default DataFetch