import React from 'react';
import { Col, Card, Table } from 'react-bootstrap';

export default function CountryLanguageCard({ index, country, clickHandler })
{
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
                        <td>Code</td>
                        <td>Language</td>
                    </tr>

                </thead>
                <tbody>
                    {Object.entries(country.languages).map(([name, lang]) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{lang}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Card.Body>
    </Card>
</Col>
  );
};

