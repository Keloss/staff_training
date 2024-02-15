const {WGroup, worker} = require('../models/models')
const ApiError = require('../error/ApiError')

class addtogroupController{
        async add(req, res) {
        const {workerId, groupId} = req.body
        const groups = await WGroup.create({workerId, groupId})
        return res.json(groups)
    }

    async getAll(req, res) {
        const {id} = req.params
        if (!id){
            return null
        }
        const work = await WGroup.findAll({where: {groupId: id}, 
        include: [{
            model: worker,
            attributes: ['id', 'name', 'tub']
        }
        ]})
        return res.json(work)
    }
}

module.exports = new addtogroupController()