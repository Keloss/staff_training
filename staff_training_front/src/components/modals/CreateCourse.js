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
                    Добавить курс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                    <Form.Control className="mt-3" placeholder={"Введите наименование курса"}/>
                    <Form.Control className="mt-3" placeholder={"Введите максимальное кол-во обучающихся курса"}/>
                    <Form.Control className="mt-3" placeholder={"Введите дату начала курса"}/>
                    <Form.Control className="mt-3" placeholder={"Введите дату конца курса"}/>
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