
import mongoose from "mongoose";

export interface Itodos{
    _id:mongoose.Types.ObjectId;
    title: string;
    isCompleted:boolean;
    }