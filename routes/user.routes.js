const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller');
const { userSchema, userUpdateSchema } = require('../schema/user.schema');
const validation = require('../validation/user.validate');




router.get("/", controller.getAllUsers);
  
router.get("/:id", controller.getUser);

router.post("/", validation(userSchema), controller.createUser);

router.put("/:id",validation(userUpdateSchema), controller.updateUser);

router.patch("/:id",validation(userUpdateSchema), controller.patchUser);

router.delete("/:id", controller.deleteUser);

module.exports = router;
 
