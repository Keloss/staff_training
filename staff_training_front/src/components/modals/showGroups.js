import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Context } from "../../index";
import { fetchGroup, fetchWorker } from "../../http/GroupAPI";
import { observer } from "mobx-react-lite";

const ShowGroup = observer(({show, onHide}) => {

    const {worker} = useContext(Context)

    useEffect(() => {
        fetchGroup().then(data => worker.setGroups(data))
        fetchWorker().then(data => worker.setWorkers(data))
    }, [])

    const ShowWorkerOfGroup = () => {
        const formData = new FormData()
        formData.append('groupId', worker.selectedGroup.id)
        fetchGroup()
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
                    Просмотреть группы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {worker.groups.map(group => (
                        <Dropdown className="mt-3 d-flex flex-column">
                                <Dropdown.Toggle>
                                    {group.group_name}
                                    <Dropdown.Menu>
                                        {worker.workers.map(work => (
                                            <Dropdown.ItemText onClick={() => ShowWorkerOfGroup()}key={group.id}>{work.name}</Dropdown.ItemText>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown.Toggle>
                            </Dropdown>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ShowGroup;