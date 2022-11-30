const express = require("express");
const authController = require("./../controllers/authController");
const examSubController = require("./../controllers//examSubController");
const router = express.Router();

router.route("/").get(authController.protect,examSubController.getAllSubjects);
router.route("/").get(examSubController.get2019Subjects);
router
  .route("/")
  .get(examSubController.get2020Subjects)
  .post(examSubController.addSubject);
router
  .route("/:id")
  .get(examSubController.getSubject)
  .patch(examSubController.updateSubject)
  .delete(authController.protect,authController.restrictTo('admin'),examSubController.deleteSubject);
module.exports = router;
