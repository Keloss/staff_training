import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Context } from "../../index";
import { fetchGroup, fetchWorker } from "../../http/GroupAPI";
import { observer } from "mobx-react-lite";
import { createWorker } from "../../http/GroupAPI";

const CreateStudent = observer(({show, onHide}) => {

    const {worker} = useContext(Context)

    useEffect(() => {
        fetchGroup().then(data => worker.setGroups(data))
        fetchWorker().then(data => worker.setWorkers(data))
    }, [])

    const  [name, setName] = useState('')
    const  [tub, setTub] = useState('')

    const addWorkerToGroup = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('tub', tub)
        formData.append('groupId', worker.selectedGroup.id)
        const worker_name = formData.get('name')
        const worker_tub = formData.get('tub')
        const group_ID = formData.get('groupId')
        const dataOfWorker = [{name: worker_name, tub: worker_tub, groupId: group_ID}]
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
                <Dropdown className="mt-3">
                    <Dropdown.Toggle>{worker.selectedWorker.name || "Выберите работника"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {worker.workers.map(work => (
                                <Dropdown.Item onClick={() => worker.setSelectedWorker(work)} key = {work.id}>
                                    {work.name} / {work.tub}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                </Dropdown>
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
                <Dropdown className="mt-3">
                    <Dropdown.Toggle>{worker.selectedGroup.group_name || "Выберите группу"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {worker.groups.map(group => (
                                <Dropdown.Item onClick={() => worker.setSelectedGroup(group)} key = {group.id}>
                                    {group.group_name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                </Dropdown>
                </Form> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addWorkerToGroup}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateStudent;