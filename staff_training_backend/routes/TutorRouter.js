const Router = require('express')
const router = new Router()
const tutorController = require('../controllers/tutorController')

router.post('/', tutorController.create)
router.get('/', tutorController.getAll)


module.exports = router