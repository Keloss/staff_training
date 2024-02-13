import {makeAutoObservable} from 'mobx';

export default class Employer {
    constructor() {
        this._isAuth = false
        this._employer = {}
        this._role=''
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setEmployer(employer){
        this._employer = employer
    }

    setRole(role){
        this._role = role
    }

    get role()
    {
        return this._role
    }

    get isAuth(){
        return this._isAuth
    }

    get employer(){
        return this._employer
    }
}