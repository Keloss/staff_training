const Router = require('express')
const router = new Router()
const EmployerRouter = require('./EmployerRouter')
const CourseRouter = require('./CourseRouter')
const TutorRouter = require('./TutorRouter')

router.use('/employer', EmployerRouter)
router.use('/course', CourseRouter)
router.use('/tutor', TutorRouter)


module.exports = router