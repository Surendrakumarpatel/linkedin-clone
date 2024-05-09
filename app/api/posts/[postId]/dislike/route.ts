import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

// post likes
export const POST = async (req:NextRequest, {params}:{params:{postId:string}}) => {
    try {
        await connectDB();
        const userId = await req.json();
        const post = await Post.findById({_id:params.postId});
        if(!post) return NextResponse.json({error:'Post not found.'});
        await post.updateOne({$pull:{likes:userId}});
        return NextResponse.json({message:"Post disliked successfully."});
    } catch (error:any) {
        return NextResponse.json({error:'An error occurred.'});
    }
}