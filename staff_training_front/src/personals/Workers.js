import { makeAutoObservable } from "mobx";

export default class Workers {
    constructor(){
        this._workers = []

        this._groups = []
        this._selectedWorker = {}
        this._selectedGroup = {}
        makeAutoObservable(this)
    }
    setWorkers(workers){
        this._workers = workers
    }

    setGroups(groups){
        this._groups = groups
    }

    setSelectedWorker(selectedWorker){
        this._selectedWorker = selectedWorker
    }

    setSelectedGroup(selectedGroup){
        this._selectedGroup = selectedGroup
    }

    get workers(){
        return this._workers
    }

    get groups(){
        return this._groups
    }

    get selectedWorker(){
        return this._selectedWorker
    }

    get selectedGroup(){
        return this._selectedGroup
    }
}