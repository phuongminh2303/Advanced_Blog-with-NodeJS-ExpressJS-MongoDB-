const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller")
router.get("/home", blogController.home)
router.get("/about", blogController.about)
router.get("/createpost", blogController.create)
router.post("/createpost", blogController.postcreate)
router.get("/:id", blogController.viewblog)
router.get("/", blogController.address)
module.exports = router;