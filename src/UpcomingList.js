import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function UpcomingList(props)
{
    const [data, setData] = useState([]);
    useEffect(() => {
        let isActive = true;
      
        fetch('http://localhost:3001/upcoming')
          .then((response) => response.json())
          .then((data) => {
            if (isActive) {
              setData(data);
            }
          })
          .catch((error) => console.log(error.message));
      
        return () => {
          isActive = false;
        };
      }, []);


    /*async function getData()
    {
        let result = await fetch("");
        result = await result.json();
        console.log(result);
        setData(result);
    }*/
    return(
        <div>
            <h1>Upcoming Vehicle List</h1>
            <div className="col-sm-8 offset-sm-2">
                <Table>
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Brand</td>
                        <td>Vehicle Color</td>
                        <td>Engine Displacement</td>
                        <td>Expected Launch</td>
                        <td>Fuel Type</td>
                        <td>Vehicle Image</td>
                        <td>Mileage</td>
                        <td>Mode</td>
                        <td>Vehicle Name</td>
                        <td>Power</td>
                        <td>Price</td>
                        <td>Seating Capacity</td>
                        <td>Vehicle Type</td>
                        <td>Wheeler Type</td>
                        <td>Update Operation</td>
                    </tr>
                    </thead>
                    {
                        data.map((item)=>
                        <tbody key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.brand}</td>
                            <td>{item.vehicle.color}</td>
                            <td>{item.vehicle.engine}</td>
                            <td>{item.vehicle.expected_launch}</td>
                            <td>{item.vehicle.fuel_type}</td>
                            <td><img style={{width:100}} src={item.vehicle.image} alt=""/></td>
                            <td>{item.vehicle.mileage}</td>
                            <td>{item.vehicle.mode}</td>
                            <td>{item.vehicle.name}</td>
                            <td>{item.vehicle.power}</td>
                            <td>{item.vehicle.price}</td>
                            <td>{item.vehicle.seating_capacity}</td>
                            <td>{item.vehicle.type}</td>
                            <td>{item.vehicle.wheeler_type}</td>
                            <td>
                                <Link to={"update/"+item.id}>
                                <span className="update">Update</span>
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                        )
                    }
                </Table>
            </div>
        </div>
    );
}

export default UpcomingList;