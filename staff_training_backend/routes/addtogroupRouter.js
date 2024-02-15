const Router = require('express')
const router = new Router()
const addtogroupController = require('../controllers/addtogroupController')

router.post('/', addtogroupController.add)
router.get('/:id', addtogroupController.getAll)

module.exports = router