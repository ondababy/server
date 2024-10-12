import { Brand } from '../models/brand.js';
import cloudinary from 'cloudinary';

export const newBrand = async (req, res) => {
    try {
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }
        const brand = await Brand.create(req.body);
        res.status(201).json({
            success: true,
            brand
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// export const createBrand = async (req, res) => {

//     let images = []
// 	if (typeof req.body.images === 'string') {
// 		images.push(req.body.images)
// 	} else {
// 		images = req.body.images.flat()
// 	}

// 	let imagesLinks = [];

// 	for (let i = 0; i < images.length; i++) {
// 		let imageDataUri = images[i]

// 		try {
// 			const result = await cloudinary.v2.uploader.upload(`${imageDataUri}`, {
// 				folder: 'Shoes/brands',
// 				width: 150,
// 				crop: "scale",
// 			});

// 			imagesLinks.push({
// 				public_id: result.public_id,
// 				url: result.secure_url
// 			})

// 		} catch (error) {
// 			console.log(error)
// 		}

// 	}

// 	req.body.images = imagesLinks

// 	const brand = await Brand.create(req.body);
// 	if (!brand)
// 		return res.status(400).json({
// 			success: false,
// 			message: 'Brand not created'
// 		})


// 	res.status(201).json({
// 		success: true,
// 		brand
// 	})
// };


export const getBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json({
            count: brands.length,
            data: brands
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getBrandById = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        res.status(200).json({
            success: true,
            brand
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const updateBrand = async (req, res) => {
    try {
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }
        const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            success: true,
            message: 'Brand updated successfully',
            brand
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const deleteBrand = async (req, res) => {
    try {
        await Brand.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Brand deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

