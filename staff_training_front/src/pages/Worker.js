import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateStudent from "../components/modals/CreateStudent";
import {addWorkerToGroup} from '../http/GroupAPI'

const Worker = () => {
    const [studentVisible, setStudentVisible] = useState(false);

    const [workerId, setWorkerId] = useState('')
    const [groupId, setGroupId] = useState('')

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setStudentVisible  (true)}>Добавить работника</Button>
            <CreateStudent show={studentVisible} onHide={() => setStudentVisible(false)}/>

            <input className="mt-3" placeholder="Введите id работника" value={workerId} onChange={(e) => setWorkerId(e.target.value)}/>
            <input className="mt-3" placeholder="Введите id группы" value={groupId} onChange={(e) => setGroupId(e.target.value)}/>
            <button className="mt-3" onClick={() => addWorkerToGroup(workerId, groupId)}>Добавить работника</button>
        </Container>
    );
}
export default Worker;