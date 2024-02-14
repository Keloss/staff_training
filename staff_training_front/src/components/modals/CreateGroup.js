import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createGroup } from "../../http/GroupAPI";

const CreateGroup = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const addGroup = () => {
        createGroup({group_name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal 
            show={show} 
            onHide={onHide}
            size="lg" 
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Добавить группу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                    <Form.Control className="mt-3"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Введите название группы"}/>
                </Form> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={() => addGroup()}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateGroup;