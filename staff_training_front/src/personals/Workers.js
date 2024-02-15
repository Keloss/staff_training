import { makeAutoObservable } from "mobx";

export default class Workers {
    constructor(){
        this._workers = []
        this._groups = []
        this._CurrentGroup = []

        this._selectedWorker = {}
        this._selectedGroup = {}
        this._selectedCurrentGroup = null
        makeAutoObservable(this)
    }
    setWorkers(workers){
        this._workers = workers
    }

    setGroups(groups){
        this._groups = groups
    }

    setCurrentGroup(CurrentGroup){
        this._CurrentGroup = CurrentGroup
    }

    setSelectedWorker(selectedWorker){
        this._selectedWorker = selectedWorker
    }

    setSelectedGroup(selectedGroup){
        this._selectedGroup = selectedGroup
    }

    setSelectedCurrentGroup(selectedCurrentGroup){
        this._selectedCurrentGroup = selectedCurrentGroup
    }

    get workers(){
        return this._workers
    }

    get groups(){
        return this._groups
    }

    get CurrentGroup(){
        return this._CurrentGroup
    }

    get selectedWorker(){
        return this._selectedWorker
    }

    get selectedGroup(){
        return this._selectedGroup
    }

    get selectedCurrentGroup(){
        return this._selectedCurrentGroup
    }
}