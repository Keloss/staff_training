import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TypeBar from "../components/TypeBar";
import Sidebar from "../components/SideBar";


const Main = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <Sidebar/>
                </Col>
            </Row>
        </Container>
    );
}
export default Main;