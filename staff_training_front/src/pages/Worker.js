import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import AddWorkerToGroup from "../components/modals/AddWorkerToGroup";
import ShowGroup from "../components/modals/showGroups";


const Worker = () => {
    const [studentVisible, setStudentVisible] = useState(false);
    const [showVisible, setShowVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setStudentVisible  (true)}>Добавить работника в группу</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setShowVisible  (true)}>Группы</Button>
            <AddWorkerToGroup show={studentVisible} onHide={() => setStudentVisible(false)}/>
            <ShowGroup show={showVisible} onHide={() => setShowVisible(false)}/>
        </Container>
    );
}
export default Worker;