import { Router } from "express";
import { messageController, dashboardController, loginController, signupController, messageStatusController, handleDeleteMessage, handleUpdateStatus } from "../controller/message.controller.js";
import { dashboardMiddleware } from "../middlewares/dashboard.middleware.js";
const router = Router()

// These four routes are just for the messaging controlling

router.route("/message-status").post(messageStatusController) // Tells users about status of their message.
router.route("/delete-message").delete(handleDeleteMessage) // Maintainer uses it to delete message.
router.route("/message").post(messageController) // saves message in db.
router.route("/update-status").put(handleUpdateStatus) // update status.
router.route("/dashboard").post(dashboardMiddleware, dashboardController)  // Maintiner dashboard.


// router.route("/signup").post(signupController)  For now I just don't want to create more managers

router.route("/login").post(loginController) // logs in.

export default router; 