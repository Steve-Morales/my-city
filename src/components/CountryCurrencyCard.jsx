import React from 'react';
import { Col, Card, Table } from 'react-bootstrap';

export default function CountryCurrencyCard({ index, country, clickHandler }) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} key={index}
            onClick={(e) => { clickHandler(); }}
        >
            <Card className="mb-3 grow pointer">
                <Card.Body>


                    <Card.Title>{country.name}</Card.Title>

                    <Table striped="columns" responsive variant="dark">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Code</td>
                                <td>Symbol</td>
                            </tr>

                        </thead>
                        <tbody>
                            {Object.entries(country.currencies).map(([code, currency]) => (
                                <tr key={code}>
                                    <td>{currency.name}</td>
                                    <td>{code}</td>
                                    <td>{currency.symbol}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Card.Body>
            </Card>
        </Col>
    );
};
