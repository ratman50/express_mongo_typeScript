import { NextFunction, Request, Response } from 'express';
import * as BookService from  '../services/BookService';

const createBook = async (req:Request, res: Response, next:NextFunction)=>{
   const book= await BookService.create(req.body);
   return res.status(201).json({book})
}
const readBook=async (req:Request, res:Response) => {
    const bookId=req.params.id;
    const book=  await BookService.findOne(bookId);
    return book ? res.status(200).json(book) : res.status(404).json(
);
}
const readAll = async (req: Request, res: Response) => {
    const book = await BookService.findMany();
    return  res.status(200).json(book);
};
const updateBook = async (req: Request, res: Response) => { 
    const bookId = req.params.id;
    const book = await BookService.update(bookId, req.body);
    return book ? res.status(200).json(book) : res.status(404).json('not found');
};
const deleteBook = async (req: Request, res: Response) => {
    const bookId = req.params.id;
    return BookService.deleteBook(bookId)
        .then((book) => (book ? res.status(201).json({ book, message: 'Deleted' }) : res.status
(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
}
export default {createBook, readAll, updateBook, deleteBook, readBook};