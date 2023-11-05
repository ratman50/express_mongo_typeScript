import mongoose from 'mongoose';
import Book, { IBook, IBookModel } from '../models/Book';

export const create=async (book:IBook):Promise<IBookModel> =>{
    const newBook= new Book({
        _id:new mongoose.Types.ObjectId,
        ...book
    });

    return  newBook.save();

}
export const findOne=async (id:string) => {
    return await Book.findById(id).populate('author').select('-__v');
}
export const findMany=async () => {
    return await Book.find();
}
export const update=async (id:string, bookUpdate:IBook) => {
    const book = await findOne(id); 
    if(book){
        book.set(bookUpdate);
        return await book.save();
    } else
    return null;
}
export const deleteBook=async (id:string)=>{
    return await Book.findByIdAndDelete(id);
}