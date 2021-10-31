import {withRouter} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';

function UpdateUpcoming(props)
{
    const [result, setResult] = useState([]);
    useEffect(async () => {
        
        await fetch('http://localhost:3001/upcoming')
          .then((response) => response.json())
          .then((data) => {
              let arr = data;
              let filterData = arr.filter(item=>item.id===parseInt(props.match.params.id));
              setResult(filterData);
              console.log(filterData);
              console.log(props.match.params.id);
          })
          .catch((error) => console.log(error.message));
      }, [props.match.params.id]);

    /*useEffect(async ()=>{
        let result = fetch("http://localhost:3001/upcoming/"+props.match.params.id,{
            method:'UPDATE'
        });
        result = await result.json();
        console.log(result);
        setData(result);
    },[setData]);*/
    return(
        <div>
            <div>
                <h1>Update Upcoming List</h1>
            </div>
            <div>
                <Container>
                {result.map((item)=>{
                                return (
                    <Form key={item.id}>
                        <Row className="g-2">
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Brand" defaultValue={item.brand}/>  
                            </Col>
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Vehicle Color" defaultValue={item.vehicle.color}/>
                            </Col>
                        </Row>
                        <br /><br />
                        <Row className="g-2">
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Engine Displacement" defaultValue={item.vehicle.engine}/>
                            </Col>
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Expected Launch" defaultValue={item.vehicle.expected_launch} />
                            </Col>
                        </Row>
                        <br /><br />
                        <Row className="g-3">
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Fuel Type" defaultValue={item.vehicle.fuel_type}/>
                            </Col>
                            <Col sm>
                                <Form.Control type="file" />
                            </Col>
                            <Col sm>
                                <img style={{width:100}} src={item.vehicle.image} alt=""/>
                            </Col>
                        </Row>
                        <br /><br />
                        <Row className="g-2">
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Vehicle Mileage" defaultValue={item.vehicle.mileage}/>
                            </Col>
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Vehicle Mode" defaultValue={item.vehicle.mode}/>
                            </Col>
                        </Row>
                        <br /><br />
                        <Row className="g-3">
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Vehicle Name" defaultValue={item.vehicle.name}/>
                            </Col>
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Power" defaultValue={item.vehicle.power}/>
                            </Col>
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Vehicle Price" defaultValue={item.vehicle.price}/>
                            </Col>
                        </Row>
                        <br /><br />
                        <Row className="g-3">
                            <Col sm>
                                <Form.Control type="number" placeholder="Enter Seating Capacity" defaultValue={item.vehicle.seating_capacity}/>
                            </Col>
                            <Col sm>
                                <Form.Control type="text" placeholder="Enter Vehicle Type" defaultValue={item.vehicle.type}/>
                            </Col>
                            <Col sm>
                                <Form.Control type="number" placeholder="Enter Wheeler Type" defaultValue={item.vehicle.wheeler_type}/>
                            </Col>
                        </Row>
                        <br /><br />
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                    )
                })}
                </Container>
        </div>
    </div>
    );
}

export default withRouter(UpdateUpcoming);