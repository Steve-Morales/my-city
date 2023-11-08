import { Col, Table, Card } from "react-bootstrap";

export default function CountryCodeCard(props)
{
    return(
        <Col xs={12} sm={6} md={4} lg={3} key={props.index}
        onClick={(e) => { props.clickHandler(); }}
    >
        <Card className="mb-3 grow pointer">
            <Card.Body>


                <Card.Title>{props.country.name}</Card.Title>
                <Table striped bordered variant="dark">
                    <tbody>
                        <tr>
                            <td>cca2</td>
                            <td>{props.country.cca2}</td>
                        </tr>
                        <tr>
                            <td>ccn3</td>
                            <td>{props.country.ccn3}</td>
                        </tr>
                        <tr>
                            <td>cca3</td>
                            <td>{props.country.cca3}</td>
                        </tr>
                        <tr>
                            <td>cioc</td>
                            <td>{props.country.cioc}</td>
                        </tr>
                    </tbody>
                </Table>

            </Card.Body>
        </Card>
    </Col>
    );
}