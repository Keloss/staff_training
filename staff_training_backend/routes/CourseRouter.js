const Router = require('express')
const router = new Router()
const CourseController = require('../controllers/CourseController')

router.post('/', CourseController.create)
router.get('/',CourseController.getAll)


module.exports = router