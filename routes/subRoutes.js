const express=require("express");
const subController=require("./../controllers//subController");
const router=express.Router();

router.route("/").get(subController.getAllSubjects).post(subController.createSubject);
router.route("/:id").get(subController.getSubject).patch(subController.updateSubject).delete(subController.deleteSubject);
module.exports=router;