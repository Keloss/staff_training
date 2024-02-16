import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

const Sprav_Position = ({show, onHide}) => {
    return (
        <Modal
            show={show} 
            onHide={onHide}
            size="lg" 
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Наименование должностей
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                    <Form.Text>....</Form.Text>
                </Form> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Sprav_Position;