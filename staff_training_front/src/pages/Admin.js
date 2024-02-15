import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateTeacher from "../components/modals/CreateTeacher";
import CreateGroup from "../components/modals/CreateGroup";
import CreateWorker from "../components/modals/CreateWorker";

const Admin = () => {
    const [teacherVisible, setTeacherVisible] = useState(false);
    const [groupVisible, setGroupVisible] = useState(false);
    const [workerVisible, setWorkerVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setTeacherVisible(true)}>Добавить преподавателя</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setGroupVisible(true)}>Добавить группу</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setWorkerVisible(true)}>Добавить работника</Button>
            <CreateTeacher show={teacherVisible} onHide={() => setTeacherVisible(false)}/>
            <CreateGroup show={groupVisible} onHide={() => setGroupVisible(false)}/>
            <CreateWorker show={workerVisible} onHide={() => setWorkerVisible(false)}/>
        </Container>
    );
}
export default Admin;