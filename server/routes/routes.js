import express from 'express'
import { Register, Login } from '../controller/userController.js'
import { body } from 'express-validator'

const router = express.Router()


router.post('/register', [
    body('name').trim().notEmpty().withMessage("Name Should Not Be Empty"),
    body('email').trim().notEmpty().withMessage("Email Should Not Be Empty")
    .isEmail().withMessage("Invalid Email !!!"),
    body('password').trim().notEmpty().withMessage("Password Should Not Be Empty")
    .isLength({min: 5, max: 30}).withMessage("Password Length Must Be 5 to 30 characters")
], Register)

router.post('/login', [
    body('email').trim().notEmpty().withMessage("Email Should Not Be Empty")
    .isEmail().withMessage("Invalid Email !!!"),
    body('password').trim().notEmpty().withMessage("Password Should Not Be Empty")
    .isLength({min: 5, max: 30}).withMessage("Password Length Must Be 5 to 30 characters")
], Login)
export {router as Router}