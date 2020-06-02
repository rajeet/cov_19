
import React, { useState, useEffect } from "react";
import { Jumbotron, Card, } from "react-bootstrap";
import Piechart from "./Piechart";


function Home() {


    useEffect(() => {
        fetchData();
    
    }, []);


    const [data, setData] = useState({});

    const fetchData = async () => {
        const fetchedData = await fetch(
            "https://nepalcorona.info/api/v1/data/nepal"
        );
        const jsonFetchedData = await fetchedData.json();
        console.log(jsonFetchedData);
        setData(jsonFetchedData);
        console.log(data)
    }







    return (
        <main>
        <Jumbotron>
            <h1 className="text-secondary">Lets Fight Against Corona Virus</h1>
            <div className="row">
                <Card style={{ width: '18rem' }} className="col-sm">
                    <Card.Body>
                        <Card.Title className="text-primary">Tested Positive</Card.Title>
                        <Card.Text>
                            Number of people tested positive
                         </Card.Text>
                        <div className="p-2 bg-primary  text-light">{data.tested_positive}</div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="col-sm">
                    <Card.Body>
                        <Card.Title className="text-info">Tested Negative</Card.Title>
                        <Card.Text>
                            Number of People Tested Negative
                         </Card.Text>
                        <div className="p-2 bg-info text-light">{data.tested_negative}</div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="col-sm">
                    <Card.Body>
                        <Card.Title className="text-warning">Total Tested</Card.Title>
                        <Card.Text>
                            Number of people tested positive
                         </Card.Text>
                        <div className="p-2 bg-warning  text-light">{data.tested_total}</div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="col-sm">
                    <Card.Body>
                        <Card.Title className="text-secondary">In Isolation</Card.Title>
                        <Card.Text>
                            Number of people in Isolation
                         </Card.Text>
                        <div className="p-2 bg-secondary  text-light">{data.in_isolation}</div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="col-sm">
                    <Card.Body>
                        <Card.Title className="text-success">In Quarantine</Card.Title>
                        <Card.Text>
                            Number of people in Quarantine
                         </Card.Text>
                        <div className="p-2 bg-success text-light">{data.quarantined}</div>
                    </Card.Body>
                </Card>


            </div>
            <hr />
            <div className="row">

                <Card style={{ width: '18rem' }} className="col-sm">
                    <Card.Body>
                        <Card.Title className="text-success">Total Recovered</Card.Title>
                        <Card.Text>
                            Number of people who are successfully Recovered
                         </Card.Text>
                        <div className="p-2 bg-success text-light">{data.recovered}</div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="col-sm">
                    <Card.Body>
                        <Card.Title className="text-danger">Total Death</Card.Title>
                        <Card.Text>
                            Number of Death
                         </Card.Text>
                        <div className="p-2 bg-danger text-light">{data.deaths}</div>
                    </Card.Body>
                </Card>

            </div>
            
        </Jumbotron>
        </main>
    )
}

export default Home