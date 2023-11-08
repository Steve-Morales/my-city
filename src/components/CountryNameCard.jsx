import { Col, Card } from "react-bootstrap";

export default function CountryNameCard(props) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} key={props.index}
            onClick={(e) => { props.clickHandler(); }}
        >
            <Card className="mb-3 grow pointer">
                <Card.Body>

                    <Card.Title>{props.countryName}</Card.Title>

                </Card.Body>
            </Card>
        </Col>
    );
}