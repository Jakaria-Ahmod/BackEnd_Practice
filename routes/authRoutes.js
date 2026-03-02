const {
  registerController,
  loginController,
  allUserController,
  singleUserController,
  deleteUserController,
  updateUserController,
} = require('../controller/authController');
const authMiddle = require('../middleware/auth-meddle');

const router = require('express').Router();

router.post('/ragister', registerController);
router.post('/login', loginController);
router.get('/all-user', authMiddle, allUserController);
router.get('/single-user/:id', authMiddle, singleUserController);
router.delete('/delete-user/:id', authMiddle, deleteUserController);
router.put('/update-user/:id', authMiddle, updateUserController);
module.exports = router;
