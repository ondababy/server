import mongoose from 'mongoose';
const CourierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the courier name'],
        trim: true,
        maxLength: [20, 'Courier name cannot exceed 20 characters']
    },
    contactNumber: {
        type: Number,
        required: [true, 'Please enter courier contact number'],
        maxLength: [11, 'Courier contact number cannot exceed 11 characters']
    },
    serviceArea: {
        type: String,
        required: [true, 'Please enter courier service area'],
        maxLength: [20, 'Courier service area cannot exceed 20 characters']
    },
    // images: [
    //     {
    //         public_id: {
    //             type: String,
    //             required: true
    //         },
    //         url: {
    //             type: String,
    //             required: true
    //         },
    //     }
    // ],
});

export const Courier = mongoose.model('Courier', CourierSchema);