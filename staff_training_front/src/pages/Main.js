import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TypeBar from "../components/TypeBar";

const Main = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar/>
                </Col>
            </Row>
        </Container>
    );
}
export default Main;