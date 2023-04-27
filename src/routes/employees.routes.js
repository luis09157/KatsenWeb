import { Router } from "express";
/*import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";*/

import {getEmployees, createEmployee} from '../controllers/employees.controllers.js'

const router = Router();

router.get('/employees', createEmployee)

// GET all Employees
/*router.get("/employees", getEmployees);

// GET An Employee
router.get("/employees/:id", getEmployee);

// DELETE An Employee
router.delete("/employees/:id", deleteEmployee);

// INSERT An Employee
router.post("/employees", createEmployee);

router.patch("/employees/:id", updateEmployee);*/

export default router;
