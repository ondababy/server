import express from 'express';
import { newCategory, getCategorys, getCategoryById, updateCategory, deleteCategory } from '../controllers/category.js';
const router = express.Router();

router.post('/', newCategory);
router.get('/', getCategorys);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;