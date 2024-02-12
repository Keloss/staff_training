const {Employer} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJWT = (id, Employer_Name, email, role) => {
    return jwt.sign(
        {id, Employer_Name, email, role},
        process.env.SECRET_KEY, 
        {expiresIn: '24h'}
    )
}

class employerController {
    async registration(req, res, next) {
        const {Employer_Name, email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await Employer.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует!')) 
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const employer = await Employer.create({Employer_Name, email, role, password: hashPassword})
        const token = generateJWT(employer.id, employer.Employer_Name, employer.email, employer.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const employer = await Employer.findOne({where: {email}})
        if (!employer) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, employer.password)
        if (!comparePassword){
            return next(ApiError.internal('Неверно указан пароль'))
        }
        const token = generateJWT(employer.id, employer.email, employer.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJWT(req.employer.id, req.employer.email, req.employer.role)
        return res.json({token})
    }
    

    async create(req, res){
        const {Employer_Name} = req.body
        const employer_name = await Employer.create({Employer_Name})
        return res.json(employer_name)
    }

    async getAll(req, res){
        const employer = await Employer.findAll()
        return res.json(employer)
    }
}

module.exports = new employerController()