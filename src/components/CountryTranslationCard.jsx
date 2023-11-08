import React from 'react';
import { Col, Card, Table } from 'react-bootstrap';

export default function CountryTranslationCard({ country, clickHandler }) {
    return (
        <Col onClick={(e) => { clickHandler(); }}>
            <Card className="mb-3 grow pointer">
                <Card.Body>
                    <Card.Title>{country.name}</Card.Title>
                    <Table striped responsive variant="dark">
                        <thead>
                            <tr>
                                <td>Language</td>
                                <td>Common</td>
                                <td>Official</td>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(country.translations).map(([language, translation]) => (
                                <tr key={language}>
                                    <td>{language}</td>
                                    <td>{translation.common}</td>
                                    <td>{translation.official}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    );
}