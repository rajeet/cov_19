import React, { useState, useEffect } from "react";
import { Form, } from "react-bootstrap";

function Province() {
    useEffect(() => {
        fetchProvinceData();
    }, [])
    const [provinceDatas, setProvinceDatas] = useState({})
    const [active, setActive] = useState();




    const fetchProvinceData = async () => {
        const fetchedProvinceData = await fetch(
            "https://data.nepalcorona.info/api/v1/covid/summary"
        );
        const jsonFetchedProvinceData = await fetchedProvinceData.json();
        setProvinceDatas(jsonFetchedProvinceData.province);
    }

    function eventHandling(event) {
        var val = event.target.value;
        console.log(val);
        
        const count = provinceDatas.active.filter((dat) => {
            return(dat.province == val ? dat.count : null);
        })
        console.log(count)
        setActive(count);

       
    }




    return (
        <div className="container">
            <div>
                <Form>
                    <Form.Label>Select Province</Form.Label>
                    <Form.Control as="select" onClick={eventHandling} name='provinceSelect'>
                        <option>Select Province</option>
                        <option value='1'>Province 1</option>
                        <option value='2'>Province 2</option>
                        <option value='3'>Province 3</option>
                        <option value='4'>Province 4</option>
                        <option value='5'>Province 5</option>
                        <option value='6'>Province 6</option>
                        <option value='7'>Province 7</option>
                    </Form.Control>
                </Form>
            </div>
            <hr />
            <div className="row justify-content-between">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-primary">Tested Positive</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {active.count}hello
                        </h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header text-info">
                        <h3 className='text-info'>Tested Negative</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

            </div>
            {/* Second line */}
            <div className="row justify-content-between">
                <div className="card">
                    <div className="card-header ">
                        <h3 className='text-warning'>Total Tested</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3 className='text-muted'>Isolation</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

            </div>
            {/* Third Line */}
            <div className="row justify-content-between">

                <div className="card">
                    <div className="card-header">
                        <h3 className='text-dark'>Quarantine</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header text-success">
                        <h3 className="text-success"> Recovered</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Province
