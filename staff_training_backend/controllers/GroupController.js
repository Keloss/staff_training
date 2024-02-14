const {group} = require('../models/models')
const ApiError = require('../error/ApiError')

class groupController{
        async create(req, res) {
        const {group_name} = req.body
        const groups = await group.create({group_name})
        return res.json(groups)
    }

    async getAll(req, res) {
        const groups = await group.findAll()
        return res.json(groups)
    }
}

module.exports = new groupController()