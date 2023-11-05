import mongoose, {Document, Schema} from "mongoose";

export interface IBook{
    title:string;
    body:string;
    author:string
}

export interface IBookModel extends Document, IBook{

}

const BookSchema:Schema=new Schema(
    {
        title:{type:String, required:true},
        author:{type:Schema.Types.ObjectId, required:true, ref:"Author"},
        body:{type:String, required:true}

    },
    {
        timestamps:true,
    },
);
export default mongoose.model<IBookModel>("Book",BookSchema);