import { NextFunction, Request, Response } from "express";
import * as AuthorService from  '../services/AuthorService';

const createAuthor = async (req:Request, res: Response, next:NextFunction)=>{
   const author= await AuthorService.create(req.body);
   return res.status(201).json({author})
}
const readAuthor=async (req:Request, res:Response) => {
    const authorId=req.params.id;
    const author=  await AuthorService.findOne(authorId);
    return author ? res.status(200).json(author) : res.status(404).json("not found");
}
const readAll = async (req: Request, res: Response) => {
    const author = await AuthorService.findMany();
    return  res.status(200).json(author);
};
const updateAuthor = async (req: Request, res: Response) => { 
    const authorId = req.params.id;
    const author = await AuthorService.update(authorId, req.body);
    return author ? res.status(200).json(author) : res.status(404).json('not found');
};
const deleteAuth = async (req: Request, res: Response) => {
    const authorId = req.params.id;
    return AuthorService.deleteAuthor(authorId)
        .then((author) => (author ? res.status(201).json({ author, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
}
export default {createAuthor, readAll, updateAuthor, deleteAuth, readAuthor};