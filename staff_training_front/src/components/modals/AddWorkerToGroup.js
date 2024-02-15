import React, { useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Context } from "../../index";
import { fetchGroup, fetchWorker } from "../../http/GroupAPI";
import { observer } from "mobx-react-lite";
import { addToGroup } from "../../http/GroupAPI";

const AddWorkerToGroup = observer(({show, onHide}) => {

    const {worker} = useContext(Context)

    useEffect(() => {
        fetchGroup().then(data => worker.setGroups(data))
        fetchWorker().then(data => worker.setWorkers(data))
    }, [])

    const addWorkerToGroup = () => {
        const formData = new FormData()
        formData.append('groupId', worker.selectedGroup.id)
        formData.append('workerId', worker.selectedWorker.id)
        const group_ID = formData.get('groupId')
        const worker_ID = formData.get('workerId')
        const dataOfWorker = [{workerId: worker_ID, groupId: group_ID}]
        addToGroup(dataOfWorker).then(data => onHide())
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
                    <Dropdown.Toggle>
                        { worker.selectedWorker.name && worker.selectedWorker.name ?
                         `${worker.selectedWorker.name} / ${worker.selectedWorker.tub}` : "Выберите работника"}
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {worker.workers.map(work => (
                                <Dropdown.Item onClick={() => worker.setSelectedWorker(work)} key = {work.id}>
                                    {work.name} / {work.tub}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                </Dropdown>
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

export default AddWorkerToGroup;