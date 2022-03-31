import express from "express";
const router = express.Router();
import {
  createPerson,
  deletePerson,
  getPerson,
  getPersons,
  getPersonsBySearch,
  getPersonsByUser,
  updatePerson,
} from "../controllers/person.js";
import auth from "../middleware/auth.js";

router.get("/search", getPersonsBySearch);
router.get("/", getPersons);
router.get("/:id", getPerson);
router.post("/", auth, createPerson);
router.delete("/:id", auth, deletePerson);
router.patch("/:id", auth, updatePerson);
router.get("/userPersons/:id", auth, getPersonsByUser);


export default router;
