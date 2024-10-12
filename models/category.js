import mongoose from 'mongoose';
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the category name'],
        trim: true,
        maxLength: [20, 'Brand name cannot exceed 20 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter brand description'],
        maxLength: [200, 'Brand description cannot exceed 200 characters']
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
});

export const Category = mongoose.model('Category', CategorySchema);