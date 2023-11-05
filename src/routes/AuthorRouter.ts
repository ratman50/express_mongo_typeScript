import express from "express";
import AuthController from "../controllers/AuthorController";

const router= express.Router();

router.post("/",AuthController.createAuthor);
router.get('/', AuthController.readAll);
router.get('/:id', AuthController.readAuthor);
router.patch('/:id', AuthController.updateAuthor);
router.delete('/:id', AuthController.deleteAuth);

export=router;