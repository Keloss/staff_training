const {group, worker} = require('../models/models')
const ApiError = require('../error/ApiError')

class addgroupController{
    async addWorkerToGroup (req, res, next) {
        const {workerId, groupName} = req.body
        try {
            const Worker = await worker.findByPk(workerId)
            const Group = await group.findByPk(groupName)
            if (!Worker || !Group) {
                return next(ApiError.badRequest('Работник или группа не найдена'))
            }
            await Worker.addGroup(Group)
            return res.status(200).json({message: 'worker added to group successfully'})
        } catch (error) {
            return next(ApiError.internal('Ошибка в добавлении работника в группу'))
        }
    }

}

module.exports = new addgroupController()