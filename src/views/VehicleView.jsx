import React from 'react';
import { useParams } from 'react-router';

const VehicleView = () => {
    const { id } = useParams();
    let vehicles;

    const getVehicleDataFromLocalStorage = () => {
        const getData = localStorage.getItem('vehicles');
        const loadedData = JSON.parse(getData);

        return loadedData;
    };

    vehicles = getVehicleDataFromLocalStorage();
    return (
        <>
            {vehicles.map(vehicle => {
                return id === vehicle.result._id ? (
                    <div key={vehicle.result.uid} className="container-fluid bg-dark min-vh-100 py-1">
                        <div className="row">
                            <div className="col-6">
                                <img
                                    className="ratio ratio-4x3"
                                    src="https://dummyimage.com/800x600/9e9e9e/000000.jpg"
                                    alt="Vehicle pic"
                                />
                            </div>
                            <div className="col-6 d-flex flex-column justify-content-center">
                                <h3 className="display-4 text-warning text-center fw-bold font-monospace mb-2">
                                    {vehicle.result.properties.name}
                                </h3>
                                <p className="text-white text-center text-wrap font-monospace  overflow-auto">
                                    {vehicle.result.description}.
                                    <br />
                                    <br />
                                    Ea sed duo labore kasd dolor est. Et nonumy dolor consetetur stet
                                    sadipscing eirmod ea ut, sit consetetur ipsum nonumy sed rebum est
                                    invidunt, magna sanctus accusam takimata amet, kasd voluptua et lorem
                                    nonumy sit no. Et dolores consetetur amet aliquyam amet justo dolores
                                    vero. Duo et dolores no labore vero labore ut. Erat diam dolor amet justo,
                                    amet ea.
                                </p>
                            </div>
                        </div>
                        <hr className="bg-warning " style={{ height: '10px' }} />
                        <div className="row mt-4">
                            <div className="col-12 text-center">
                                <table className="table table-dark table-striped font-monospace ">
                                    <thead>
                                        <tr>
                                            <th scope="col"># &nbsp;</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Model</th>
                                            <th scope="col">Passengers</th>
                                            <th scope="col">Max. Atmospheric Speed</th>
                                            <th scope="col">Cargo Capacity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">&nbsp;</th>
                                            <td>{vehicle.result.properties.name}</td>
                                            <td>{vehicle.result.properties.model}</td>
                                            <td>{vehicle.result.properties.passengers}</td>
                                            <td>{vehicle.result.properties.max_atmosphering_speed}</td>
                                            <td>{vehicle.result.properties.cargo_capacity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : null;
            })}
        </>
    );
};
export default VehicleView;
