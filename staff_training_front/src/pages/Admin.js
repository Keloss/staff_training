import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateTeacher from "../components/modals/CreateTeacher";
import CreateGroup from "../components/modals/CreateGroup";
import AddWorkerToGroup from "../components/modals/AddWorkerToGroup";

const Admin = () => {
    const [teacherVisible, setTeacherVisible] = useState(false);
    const [groupVisible, setGroupVisible] = useState(false);
    const [studentVisible, setStudentVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setTeacherVisible(true)}>Добавить преподавателя</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setGroupVisible(true)}>Добавить группу</Button>
            <CreateTeacher show={teacherVisible} onHide={() => setTeacherVisible(false)}/>
            <CreateGroup show={groupVisible} onHide={() => setGroupVisible(false)}/>
        </Container>
    );
}
export default Admin;