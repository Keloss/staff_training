import { makeAutoObservable } from "mobx";

export default class Lists {
    constructor(){
        this._types = [
            {id: 1, name: "Работники", href: "/workers"},
            {id: 2, name: "Справочники", href: "/sprav"}
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