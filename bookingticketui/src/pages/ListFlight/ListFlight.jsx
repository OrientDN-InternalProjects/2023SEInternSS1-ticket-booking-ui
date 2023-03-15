import React, {useState,useEffect, Fragment } from 'react'
import '../../pages/ListFlight/List.css'
import Table from 'react-bootstrap/Table'
import { Container, Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
const ListFlight = () => {
    const [search, setSearch] = useState('');
    const[data,setData] = useState([]);
    useEffect(()=>{
        (async () => {
            let result =  await fetch("https://localhost:7089/api/FlightControllers");
            result = await result.json();
            setData(result.result)
        })()
    },[])
    console.log("result",data)
  return (
<div>
<Container>
    <h1 className='text-center text-light mt-10'>Flight List</h1>
    <Form>
<InputGroup className='my-3'>
    <Form.Control onChange={(e)=>setSearch(e.target.value)} placeholder='Search flight'/>
</InputGroup>

    </Form>
    <Table striped>
        <thead class="text-white bg-primary fw-bold ">
        <tr>
            <td>Image</td>
            <td>Aircraft Model</td>
            <td>Depart Airport</td>
            <td>Arrival Airport</td>
            <td>Depart Time</td>
            <td>Arrival Time</td>
            <td>Business Price</td>
            <td>Economy Price</td>
            <td>Remain BusinessSeat</td>
            <td>Remain EconomySeat</td>
            <td></td>
            <td></td>
        </tr>
        </thead>

        <tbody class="table-light">
            {data.filter((item) =>{
            return search.toLowerCase() ==='' ? item : item.departAirport.toLowerCase().includes(search)
        }).map(data => (
        <tr key={data.id}>
            <td><img src="https://img.icons8.com/nolan/64/airplane-take-off.png"/></td>
            <td>{data.aircraftModel}</td>
            <td>{data.departAirport}</td>
            <td>{data.arrivalAirport}</td>
            <td>{data.departTime}</td>
            <td>{data.arrivalTime}</td>
            <td>{data.businessPrice}</td>
            <td>{data.economyPrice}</td>
            <td>{data.remainBusinessSeat}</td>
            <td>{data.remainEconomySeat}</td>
            <td> <Button variant="success">Booking Business</Button>{' '}</td>
            <td> <Button variant="warning">Booking Economy</Button>{' '}</td>
        </tr>
    ))}
    </tbody>
    </Table>
    </Container>
</div>
  )
}

export default ListFlight