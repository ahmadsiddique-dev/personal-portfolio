import { Router } from "express";
import { messageController, dashboardController, managerController } from "../controller/message.controller.js";

const router = Router()

router.route("/message").post(messageController)
router.route("/dashboard").post(dashboardController)
router.route("/manager").post(managerController)

export default router; 