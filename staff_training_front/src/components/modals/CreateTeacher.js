import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";


const CreateTeacher = ({show, onHide}) => {
    return (
        <Modal 
            show={show} 
            onHide={onHide}
            size="lg" 
            centered 
        >
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Добавить преподавателя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form className="mt-2">
                    <Form.Control className="mt-3" placeholder={"Введите ФИО преподавателя"}/>
                    <Form.Control className="mt-3" placeholder={"Введите табельный номер преподавателя"}/>
                    <Form.Control className="mt-3" placeholder={"Введите Паспортные данные преподавателя"}/>
                    <Form.Control className="mt-3" placeholder={"Введите структурный подраздел преподавателя"}/>
                    <Form.Control className="mt-3" placeholder={"Введите должность преподавателя"}/>
                    <Form.Control className="mt-3" placeholder={"Введите статус преподавателя"}/>
                </Form> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateTeacher;