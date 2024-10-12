import mongoose from 'mongoose';
const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the brand name'],
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

export const Brand = mongoose.model('Brand', brandSchema);