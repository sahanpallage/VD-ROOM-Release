import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
    
    
        },
        imageUrl: [{
            type: String,
            required: true,
        }],
        likes: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }

);

//export the model
const postModel = mongoose.model("Post", postSchema);
export default postModel;