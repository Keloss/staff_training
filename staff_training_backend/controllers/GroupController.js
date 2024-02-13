const {group, worker} = require('../models/models')
const ApiError = require('../error/ApiError')

class groupController{
    async addWorkerToGroup (req, res, next) {
        const {workerId, groupId} = req.body
        try {
            const Worker = await worker.findByPk(workerId)
            const Group = await group.findByPk(groupId)
            if (!Worker || !Group) {
                return next(ApiError.badRequest('Работник или группа не найдена'))
            }
            await Worker.addGroup(Group)
            return res.status(200).json({message: 'worker added to group successfully'})
        } catch (error) {
            return next(ApiError.internal('Ошибка в добавлении работника в группу'))
        }
    }

    async create(req, res){
        const {group_name} = req.body
        const name = await group.create({group_name})
        return res.json(name)
    }
}

module.exports = new groupController()