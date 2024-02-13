const Router = require('express')
const router = new Router()
const groupController = require('../controllers/GroupController')

router.post('/addWorkerToGroup', groupController.addWorkerToGroup)
router.post('/', groupController.create)

module.exports = router