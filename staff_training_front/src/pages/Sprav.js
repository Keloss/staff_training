import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Sprav from "../components/modals/Sprav";

const Worker = () => {
    const [spravVisible, setSpravVisible] = useState(false);
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setSpravVisible  (true)}>Наименование должностей</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setSpravVisible  (true)}>СПК</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setSpravVisible  (true)}>СП</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setSpravVisible  (true)}>Перечень преподавателей</Button>
            <Sprav show={spravVisible} onHide={() => setSpravVisible(false)}/>
        </Container>
    );
}
export default Worker;