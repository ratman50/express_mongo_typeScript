import express from "express";
import AuthController from "../controllers/AuthorController";
import { Schemas, validateSchema } from "../middleware/ValidateSchema";

const router= express.Router();

router.post("/",validateSchema(Schemas.author.create),AuthController.createAuthor);
router.get('/', AuthController.readAll);
router.get('/:id', AuthController.readAuthor);
router.patch('/:id', validateSchema(Schemas.author.update), AuthController.updateAuthor);
router.delete('/:id', AuthController.deleteAuth);

export=router;