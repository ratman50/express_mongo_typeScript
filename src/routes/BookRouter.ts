import express from 'express';
import BookController from '../controllers/BookController';
import { Schemas, validateSchema } from '../middleware/ValidateSchema';

const router= express.Router();

router.post('/',validateSchema(Schemas.book.create),BookController.createBook);
router.get('/', BookController.readAll);
router.get('/:id', BookController.readBook);
router.patch('/:id',validateSchema(Schemas.book.update) ,BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

export=router;