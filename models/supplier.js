import mongoose from 'mongoose';
const SupplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the supplier name'],
        trim: true,
        maxLength: [20, 'Courier name cannot exceed 20 characters']
    },
    emailAddress: {
        type: String,
        required: [true, 'Please enter supplier email address'],
        maxLength: [20, 'Courier service area cannot exceed 20 characters']
    },
    contactNumber: {
        type: String,
        required: [true, 'Please enter supplier contact number'],
        maxLength: [11, 'Courier contact number cannot exceed 11 characters']
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

export const Supplier = mongoose.model('Supplier', SupplierSchema);