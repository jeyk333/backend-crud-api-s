const express = require("express");
const router = express.Router();
const Controller = require("../controllers/community");

//Route to get all communities
router.get("/", Controller.getCommunitites);

//Route to Create a new community
router.post("/", Controller.postCommunity);

//Route to delete a specific community
router.delete("/:id", Controller.deleteACommunity);

//Route to Get a specific community
router.get("/:id", Controller.getACommunity);

//Route to update a specific community
router.put("/:id", Controller.updateACommunity);

module.exports = router;
