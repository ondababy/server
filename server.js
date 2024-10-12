import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { PORT } from './config/config.js';
import connectDatabase from './config/database.js';
import brandRoutes from './routes/brand.js';
import courierRoutes from './routes/courier.js';
import supplierRoutes from './routes/supplier.js';
import { v2 as cloudinary } from 'cloudinary';

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send('ondababy is doing it');
});

app.use('/suppliers', supplierRoutes);

app.use('/brands', brandRoutes);

app.use('/couriers', courierRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
