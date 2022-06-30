const express = require("express");
const router = express.Router();
const peopleController = require("../controllers/peopleController")


router
.route("/")
.get(peopleController.getPeople )
.post(peopleController.createPerson )

router
.route("/postman")
.post(peopleController.createPersonPostman)
  
router
.route("/:id")
.put(peopleController.updatePerson)
.delete(peopleController.deletePerson )
  
  module.exports = router;