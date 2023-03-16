import React from 'react'
import '../../components/BookingForm/booking.css'
import {useState,useEffect, Fragment } from 'react'
import { Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
const Booking = ({setResponse}) => {
    const [boxvalue, setBoxvalue] = useState([])
    const [departAirport, setDepartAirport] = useState('')
    const [arrivalAirport, setArrivalAirport] = useState('')
    const [dateDepart, setDateDepart] = useState('')
    const [test, setTest] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        (async () => {
            let result =  await fetch("https://localhost:7089/api/Airport/airports");
            result = await result.json();
            setBoxvalue(result.result)
        })()
    },[])
    const dataSubmit ={
        departAirport,
        arrivalAirport,
        dateDepart
    }
    console.log(dataSubmit)
    const handleFormSubmit = async (event) =>{
        event.preventDefault()
        let result =  await fetch(`https://localhost:7089/api/FlightControllers/GetflightByRequest?DepartCode=${dataSubmit.departAirport}&ArrivalCode=${dataSubmit.arrivalAirport}&DepartDate=${dataSubmit.dateDepart}`,
        {
            method:'GET'
        })
        result = await result.json()
        if(result.isError === true) {
            alert("error")
            navigate("/")
        }
        else
        {
            setTest(result.result)
            setResponse(dataSubmit)
            navigate('/list-search')
        }
        }
    
    console.log("result",boxvalue)
    console.log("result2",test)
  return (
    <Container>
        <form onSubmit={handleFormSubmit}>
    <div class="card p-4 mt-5" >
        <div class="row g-3">
            <div class="col-12 mb-4">
                <h4 class='text-center mt-10'>Flight Booking<img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-search-airport-kiranshastry-gradient-kiranshastry.png"/></h4>
                <span class="text-muted">Have chill with your flight</span>
            </div>
            <div class="col-12">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Roundtrip" value="option1"/>
                    <label class="form-check-label" for="Roundtrip">Roundtrip</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Oneway" value="option2"/>
                    <label class="form-check-label" for="Oneway">One way</label>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="form-floating">
                    <select name="depart" className="form-control" onChange={(event) =>setDepartAirport(event.target.value)}>
                   <option>--Select Depart Airport--</option>
                   {
                     boxvalue.map( (getcon)=>(
                   <option key={getcon.id} value={getcon.code}> {getcon.code},{getcon.name}</option>
                     ))
                }
                 
                 </select>
                 <label>FLYING FROM</label>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="form-floating">
                <select name="arrival" className="form-control" onChange={(event) =>setArrivalAirport(event.target.value)}>
                   <option>--Select Arival Airport--</option>
                   {
                     boxvalue.map( (getcon)=>(
                   <option key={getcon.id} value={getcon.code}> {getcon.code},{getcon.name}</option>
                     ))
                }
                 
                 </select>
                    <label>FLYING TO</label>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="form-floating">
                    <input type="date" class="form-control" placeholder="DEPARTING" onChange={(event) =>setDateDepart(event.target.value)}/>
                    <label>DEPARTING</label>
                </div>
            </div>
            <div class="col-12 mt-4">
                <button class="btn btn-primary text-uppercase" type="submit">SHOWN FLIGHTS<i class="fa fa-plane ms-3"></i></button>
            </div>
        </div>
    </div>
    </form>
</Container>
  )
}

export default Booking
