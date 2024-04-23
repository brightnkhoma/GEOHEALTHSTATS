import express from 'express'
import {addDisease,addDistrict,addUser,getDiseaase,addHospital} from './controller.js'

const router = express.Router()

router.post('/adduser',addUser);
router.post('/adddisease',addDisease)
router.post('/adddistrict',addDistrict)
router.get('/getdisease',getDiseaase)
router.post('/addhospital',addHospital)

export default router;