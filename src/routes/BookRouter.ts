import express from 'express';
import BookController from '../controllers/BookController';

const router= express.Router();

router.post('/',BookController.createBook);
router.get('/', BookController.readAll);
router.get('/:id', BookController.readBook);
router.patch('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

export=router;