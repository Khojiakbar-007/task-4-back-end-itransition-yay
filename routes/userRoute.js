import express from 'express';
import { isActiveUser } from '../middlewares/isActiveUser.js';
import validate from '../utils/yupValidations.js';
import controller from '../controllers/userController.js';
import trimRequest from 'trim-request';

import schemas from '../validations/userValidations.js';

const router = express.Router();

 router
  .route('/')
  .get(
    trimRequest.all,
    isActiveUser,
    controller.getUserInfo
  );

 router
  .route('/get-all-users')
  .get(
    trimRequest.all,
    isActiveUser,
    controller.getAllUsers
  );

 router
  .route('/block-user')
  .post(
    trimRequest.all,
    isActiveUser,
    controller.blockUser
  );

 router
  .route('/unblock-user')
  .post(
    trimRequest.all,
    isActiveUser,
    controller.unblockUser
  );

export default router;
