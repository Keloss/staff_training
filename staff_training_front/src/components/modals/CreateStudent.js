import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";

const CreateStudent = ({show, onHide}) => {
    return (
        <Modal
            show={show} 
            onHide={onHide}
            size="lg" 
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Добавить работника
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
               <Form.Control className="mt-3" placeholder={"Введите ФИО работника"}/>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>Выберите группу</Dropdown.Toggle>
                        <Dropdown.Menu></Dropdown.Menu>
                    </Dropdown>
                </Form> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateStudent;