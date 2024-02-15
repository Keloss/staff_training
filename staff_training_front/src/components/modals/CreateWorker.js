import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { createWorker } from "../../http/GroupAPI";

const CreateWorker = observer(({show, onHide}) => {

    const  [name, setName] = useState('')
    const  [tub, setTub] = useState('')

    const addWorker = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('tub', tub)
        const worker_name = formData.get('name')
        const worker_tub = formData.get('tub')
        const dataOfWorker = [{name: worker_name, tub: worker_tub}]
        createWorker(dataOfWorker).then(data => onHide())
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
                    Добавить работника в группу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                    <Form>
                        <Form.Control className="mt-3"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите ФИО работника"}/>
                    </Form> 
                    <Form>
                        <Form.Control className="mt-3"
                        value={tub}
                        onChange={e => setTub(e.target.value)}
                        placeholder={"Введите табельный номер работника"}/>
                    </Form> 
                
                </Form> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addWorker}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateWorker;