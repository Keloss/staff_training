const {worker} = require('../models/models')
const ApiError = require('../error/ApiError')

class workerController{
    async create(req, res, next){
        try {
            const {name, tub} = req.body
            const workers = await worker.create({name, tub})
            return res.json(workers)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        const workers = await worker.findAll()
        return res.json(workers)
    }

}

module.exports = new workerController()