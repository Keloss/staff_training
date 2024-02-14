const Router = require('express')
const router = new Router()
const EmployerRouter = require('./EmployerRouter')
const CourseRouter = require('./CourseRouter')
const GroupRouter = require('./GroupRouter')
const addGroupRouter = require('./AddGroupRouter')
const workerRouter = require('./workerRouter')

router.use('/employer', EmployerRouter)
router.use('/course', CourseRouter)
router.use('/group', GroupRouter)
router.use('/addworker', addGroupRouter)
router.use('/worker', workerRouter)

module.exports = router