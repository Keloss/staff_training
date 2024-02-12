import { makeAutoObservable } from "mobx";

export default class Lists {
    constructor(){
        this._types = [
            {id: 1, name: "Группы"},
            {id: 2, name: "Курсы"},
            {id: 3, name: "Преподаватели"},
            {id: 4, name: "Справочник"}
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types= types
    }

    setSelectedType(type){
        this._selectedType = type
    }

    get types(){
        return this._types
    }

    get selectedType(){
        return this._selectedType
    }
}