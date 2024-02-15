const Router = require('express')
const router = new Router()
const EmployerRouter = require('./EmployerRouter')
const CourseRouter = require('./CourseRouter')
const GroupRouter = require('./GroupRouter')
const workerRouter = require('./workerRouter')
const addtogroupRouter = require('./addtogroupRouter')

router.use('/employer', EmployerRouter)
router.use('/course', CourseRouter)
router.use('/group', GroupRouter)
router.use('/worker', workerRouter)
router.use('/addtogroup', addtogroupRouter)

module.exports = router