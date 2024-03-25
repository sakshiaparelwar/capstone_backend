const express = require("express");
const {
  createEvent,
  showeventData,
  getEventsdetails,
} = require("../controllers/eventController");
const router = express.Router();

router.route("/createevent").post(createEvent);
router.route("/").get(showeventData);

router.route("/:id").get(getEventsdetails);

module.exports = router;
