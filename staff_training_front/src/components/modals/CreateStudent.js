import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

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
                    <Form.Control placeholder={"Введите ФИО работника"}/>
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