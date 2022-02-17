const { application } = require(`express`)
const express = require(`express`)
const router = express.Router()

const userControllers = require("../controllers/UserControllers")

router.get(`/get-users`, userControllers.getUsers)
router.post(`/create-user`, userControllers.createUser)
router.put(`/update-user/:userId`, userControllers.updateUser)
router.delete(`/delete-user/:userId`, userControllers.deleteUser)


module.exports = router