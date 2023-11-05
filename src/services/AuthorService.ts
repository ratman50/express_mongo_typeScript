import mongoose from "mongoose";
import Author, { IAuthor, IAuthorModel } from "../models/Author";

export const create=async (author:IAuthor):Promise<IAuthorModel> =>{
    const newAuthor= new Author({
        _id:new mongoose.Types.ObjectId,
        ...author
    });

    return  newAuthor.save();

}
export const findOne=async (id:string) => {
    return await Author.findById(id);
}
export const findMany=async () => {
    return await Author.find();
}
export const update=async (id:string, authorUpdate:IAuthor) => {
    const author = await findOne(id); 
    if(author){
        author.set(authorUpdate);
        return await author.save();
    } else
    return null;
}
export const deleteAuthor=async (id:string)=>{
    return await Author.findByIdAndDelete(id);
}