import { response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserControler";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();
const createUserControler = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users",createUserControler.handle);
router.post("/tags",ensureAdmin,createTagController.handle);


export { router }