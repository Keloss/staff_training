import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Sprav_Position from "../components/modals/Sprav/Sprav_Position";
import Sprav_SPK from "../components/modals/Sprav/Sprav_SPK";
import Sprav_SP from "../components/modals/Sprav/Sprav_SP";
import ListOfTeachers from "../components/modals/Sprav/ListOfTeachers"

const Worker = () => {
    const [Sprav_PositionVisible, setSprav_PositionVisible] = useState(false);
    const [Sprav_SPKVisible, setSprav_SPKVisible] = useState(false);
    const [Sprav_SPVisible, setSprav_SPVisible] = useState(false);
    const [ListOfTeachersVisible, setListOfTeachersVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setSprav_PositionVisible  (true)}>Наименование должностей</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setSprav_SPKVisible  (true)}>СПК</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setSprav_SPVisible  (true)}>СП</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setListOfTeachersVisible  (true)}>Перечень преподавателей</Button>
            <Sprav_Position show={Sprav_PositionVisible} onHide={() => setSprav_PositionVisible(false)}/>
            <Sprav_SPK show={Sprav_SPKVisible} onHide={() => setSprav_SPKVisible(false)}/>
            <Sprav_SP show={Sprav_SPVisible} onHide={() => setSprav_SPVisible(false)}/>
            <ListOfTeachers show={ListOfTeachersVisible} onHide={() => {setListOfTeachersVisible(false)}}/>
        </Container>
    );
}
export default Worker;