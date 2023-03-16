import React from 'react'
import '../../components/BookingForm/booking.css'
import {useState,useEffect, Fragment } from 'react'
const Booking = () => {
    const [boxvalue, setBoxvalue] = useState([])
    useEffect(()=>{
        (async () => {
            let result =  await fetch("https://localhost:7089/api/Airport/airports");
            result = await result.json();
            setBoxvalue(result.result)
        })()
    },[])
    console.log("result",boxvalue)
  return (
    <div class="container" >
    <div class="card p-4 mt-5" >
        <div class="row g-3">
            <div class="col-12 mb-4">
                <h4>Flight Booking</h4>
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
                    <select name="country" className="form-control" onChange={(e)=>handlecountry(e)}>
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
                <select name="country" className="form-control" onChange={(e)=>handlecountry(e)}>
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
                    <input type="date" class="form-control" placeholder="DEPARTING"/>
                    <label>DEPARTING</label>
                </div>
            </div>
            <div class="col-12 mt-4">
                <button class="btn btn-primary text-uppercase" type="button">SHOWN FLIGHTS<i class="fa fa-plane ms-3"></i></button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Booking
