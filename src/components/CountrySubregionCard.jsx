import React from 'react';
import { Col, Card, Table } from 'react-bootstrap';

export default function CountrySubregionCard({subregionName, countryNames, clickHandler})
{
    return(
        <Col
        >
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>{subregionName}</Card.Title>
                    <Table striped hover responsive variant="dark">
                        <thead>
                            <tr>
                                <td className="fs-4 text-center">Countries</td>
                            </tr>
                        </thead>
                        <tbody>
                            {countryNames.map((cn, ind) => (
                                <tr className="pointer" key={ind} onClick={(e)=>{ clickHandler(cn);}}>
                                    <td>{cn}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    );
}