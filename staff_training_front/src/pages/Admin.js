import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateTeacher from "../components/modals/CreateTeacher";
import CreateCourse from "../components/modals/CreateCourse";
import CreateStudent from "../components/modals/CreateStudent";

const Admin = () => {
    const [teacherVisible, setTeacherVisible] = useState(false);
    const [courseVisible, setCourseVisible] = useState(false);
    const [studentVisible, setStudentVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setTeacherVisible(true)}>Добавить преподавателя</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setCourseVisible(true)}>Добавить курс</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setStudentVisible  (true)}>Добавить работника</Button>
            <CreateTeacher show={teacherVisible} onHide={() => setTeacherVisible(false)}/>
            <CreateCourse show={courseVisible} onHide={() => setCourseVisible(false)}/>
            <CreateStudent show={studentVisible} onHide={() => setStudentVisible(false)}/>
        </Container>
    );
}
export default Admin;