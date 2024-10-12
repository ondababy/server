import express from 'express';
import { newBrand, getBrands, getBrandById, updateBrand, deleteBrand } from '../controllers/brand.js';
const router = express.Router();

// router.post('/', upload.array('images', 10), createBrand);
router.post('/', newBrand);
router.get('/', getBrands);
router.get('/:id', getBrandById); 
router.put('/:id', updateBrand);
router.delete('/:id', deleteBrand);

export default router;
