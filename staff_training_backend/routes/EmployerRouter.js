const Router = require('express')
const router = new Router()
const employerController = require('../controllers/employerController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registration', employerController.registration)
router.post('/login', employerController.login)
router.post('/', checkRole('ADMIN'),employerController.create)
router.get('/', employerController.getAll)
router.post('/auth', authMiddleware, employerController.check)

module.exports = router