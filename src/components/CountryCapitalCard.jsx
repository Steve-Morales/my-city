import React from 'react';
import { Col, Card, Table } from 'react-bootstrap';

export default function CountryCapitalCard({ index, country, clickHandler }) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} key={index}
            onClick={(e) => { clickHandler(); }}
        >
            <Card className="mb-3 grow pointer">
                <Card.Body>


                    <Card.Title>{country.name}</Card.Title>
                    {country.capital.length == 1 && <Card.Text>{country.capital[0]}</Card.Text>}

                    {country.capital.length > 1 && <Table striped="columns" responsive variant="dark">
                        <thead>
                            <tr>
                                <td>Capitals</td>
                            </tr>

                        </thead>
                        <tbody>
                            {country.capital.map((item, index) => (
                                <tr key={index}>
                                    <td>{item}</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>}

                </Card.Body>
            </Card>
        </Col>
    );
}