const {worker} = require('../models/models')
const ApiError = require('../error/ApiError')

class workerController{
    async create(req, res, next){
        try {
            const {name, tub, groupId} = req.body
            const workers = await worker.create({name, tub, groupId})
            return res.json(workers)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        const {groupId} = req.query
        let workers;
        if (!groupId){
            workers = await worker.findAll()
        }
        if (groupId){
            workers = await worker.findAll({where: {groupId}})
        }
        return res.json(workers)
    }

}

module.exports = new workerController()