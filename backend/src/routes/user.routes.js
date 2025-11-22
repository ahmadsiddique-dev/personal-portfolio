import { Router } from "express";
import { messageController, dashboardController, loginController, signupController, messageStatusController, handleDeleteMessage, handleUpdateStatus } from "../controller/message.controller.js";
import { dashboardMiddleware } from "../middlewares/dashboard.middleware.js";
const router = Router()

// I think there is no need of making middlewaere.

router.route("/message-status").post(messageStatusController)
router.route("/delete-message").delete(handleDeleteMessage)
router.route("/message").post(messageController)
router.route("/update-status").put(handleUpdateStatus)
router.route("/dashboard").post(dashboardMiddleware, dashboardController)
router.route("/signup").post(signupController) // For now I just don't want to create more managers
router.route("/login").post(loginController) 

export default router; 