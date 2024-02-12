import {makeAutoObservable} from 'mobx';

export default class Employer {
    constructor() {
        this._isAuth = false
        this._employer = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setEmployer(employer){
        this._employer = employer
    }

    get isAuth(){
        return this._isAuth
    }

    get employer(){
        return this._employer
    }
}