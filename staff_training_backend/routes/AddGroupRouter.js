const Router = require('express')
const router = new Router()
const addgroupController = require('../controllers/AddGroupController')

router.post('/', addgroupController.addWorkerToGroup)


module.exports = router