import mongoose, { Document, Model } from "mongoose";
import { IUser } from "./user.model";
import { IComment } from "./comment.model";
export interface IPost{
    description:string,
    user:IUser,
    imageUrl?:string,
    likes?:string[],
    comments?:IComment[]
}
export interface IPostDocument extends IPost, Document{
    createdAt:Date,
    updatedAt:Date
}
const postSchema = new mongoose.Schema<IPostDocument>({
    description:{
        type:String,
        required:true
    },
    user:{
        userId:{
            type:String,
            required:true
        },
        profilePhoto:{
            type:String,
            required:true
        },
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        }
    },
    imageUrl:{
        type:String,
        default:"",
    },
    likes:{
        type:[String]
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
},{timestamps:true});
export const Post : Model<IPostDocument> = mongoose.models?.Post || mongoose.model<IPostDocument>("Post", postSchema);