import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateStudent from "../components/modals/CreateStudent";


const Worker = () => {
    const [studentVisible, setStudentVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setStudentVisible  (true)}>Добавить работника в группу</Button>
            <CreateStudent show={studentVisible} onHide={() => setStudentVisible(false)}/>
        </Container>
    );
}
export default Worker;