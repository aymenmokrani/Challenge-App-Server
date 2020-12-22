const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  deleteAllUsers,
  updateUser,
  deleteOne,
} = require("../controller/userController");

router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/", deleteAllUsers);
router.delete("/:id", deleteOne);

module.exports = router;
